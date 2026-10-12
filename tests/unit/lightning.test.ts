import { describe, expect, it } from "vitest";
import { PUZZLE_BANK } from "@/data/puzzles";
import { createGameState, submitAnswer } from "@/lib/game/engine";
import {
  answerLightningQuestion,
  currentLightningIndex,
  LIGHTNING_MS,
  lightningDeadlineMs,
  lightningScore,
  restoreGameWithLightning,
  startLightningQuestion,
} from "@/lib/game/lightning";
import { buildShareText } from "@/lib/game/share";
import { lookupPuzzle } from "@/lib/puzzles/lookup";
import { parseStore } from "@/lib/storage/persistence";
import { gameRecordSchema } from "@/lib/validation/storage";
import type { GameRecord, PlayerPuzzle } from "@/types";

const START = new Date("2026-10-01T12:00:00.000Z");
const later = (ms: number) => new Date(START.getTime() + ms);

function loadPuzzle(): PlayerPuzzle {
  const view = lookupPuzzle(PUZZLE_BANK, "2026-10-01", "2026-10-01");
  if (view.status !== "ok") throw new Error(`Puzzle 1 is ${view.status}`);
  return view.puzzle;
}

function finishedMainGame(puzzle: PlayerPuzzle): GameRecord {
  let state = createGameState(puzzle);
  puzzle.rounds.forEach((question, index) => {
    const answer =
      question.kind === "multiple-choice"
        ? ({ kind: "multiple-choice", optionId: question.correctOptionId } as const)
        : ({ kind: "timeline", order: question.correctOrder } as const);
    const outcome = submitAnswer(state, puzzle, index, answer, START);
    if (!outcome.ok) throw new Error(outcome.error);
    state = outcome.state;
  });
  return state;
}

function started(state: GameRecord, puzzle: PlayerPuzzle, index: number, at: Date): GameRecord {
  const outcome = startLightningQuestion(state, puzzle, index, at);
  if (!outcome.ok) throw new Error(outcome.error);
  return outcome.state;
}

describe("lightning round", () => {
  const puzzle = loadPuzzle();
  const round = puzzle.lightning!;
  const correct = (index: number) => round.questions[index].correctOptionId;
  const wrong = (index: number) => round.options.find((option) => option.id !== correct(index))!.id;

  it("is sent to players with every option shared across its ten questions", () => {
    expect(round.options).toHaveLength(4);
    expect(round.questions).toHaveLength(10);
  });

  it("stays locked until all five main rounds are answered", () => {
    const outcome = startLightningQuestion(createGameState(puzzle), puzzle, 0, START);
    expect(outcome).toEqual({ ok: false, error: "locked" });
  });

  it("requires a question's clock to be started before it can be answered", () => {
    const outcome = answerLightningQuestion(finishedMainGame(puzzle), puzzle, 0, correct(0), START);
    expect(outcome).toEqual({ ok: false, error: "not-started" });
  });

  it("does not restart a running clock when a question is started twice", () => {
    const first = started(finishedMainGame(puzzle), puzzle, 0, START);
    const again = started(first, puzzle, 0, later(9000));
    expect(lightningDeadlineMs(again.lightning)).toBe(START.getTime() + LIGHTNING_MS);
  });

  it("scores answers in time and counts late answers as timeouts", () => {
    let state = started(finishedMainGame(puzzle), puzzle, 0, START);
    const onTime = answerLightningQuestion(state, puzzle, 0, correct(0), later(14_000));
    if (!onTime.ok) throw new Error(onTime.error);
    expect(onTime.result.outcome).toBe("correct");
    state = started(onTime.state, puzzle, 1, later(20_000));

    const late = answerLightningQuestion(state, puzzle, 1, correct(1), later(20_000 + LIGHTNING_MS + 5000));
    if (!late.ok) throw new Error(late.error);
    expect(late.result).toMatchObject({ optionId: null, outcome: "incorrect" });
    expect(lightningScore(late.state.lightning)).toBe(1);
    expect(currentLightningIndex(late.state.lightning)).toBe(2);
    expect(lightningDeadlineMs(late.state.lightning)).toBeNull();
  });

  it("rejects answering out of order", () => {
    const state = started(finishedMainGame(puzzle), puzzle, 0, START);
    expect(answerLightningQuestion(state, puzzle, 1, correct(1), START)).toEqual({ ok: false, error: "out-of-order" });
  });

  it("survives a save-and-reload, keeping the running clock and re-deriving outcomes", () => {
    let state = started(finishedMainGame(puzzle), puzzle, 0, START);
    const first = answerLightningQuestion(state, puzzle, 0, wrong(0), later(3000));
    if (!first.ok) throw new Error(first.error);
    state = started(first.state, puzzle, 1, later(6000));

    const saved = gameRecordSchema.parse(JSON.parse(JSON.stringify(state)));
    saved.lightning!.results[0]!.outcome = "correct";
    const { state: restored, issue } = restoreGameWithLightning(saved, puzzle);

    expect(issue).toBeNull();
    expect(restored.lightning!.results[0]!.outcome).toBe("incorrect");
    expect(lightningDeadlineMs(restored.lightning)).toBe(later(6000).getTime() + LIGHTNING_MS);
  });

  it("drops saved lightning progress that belongs to a different round", () => {
    const state = started(finishedMainGame(puzzle), puzzle, 0, START);
    const { state: restored, issue } = restoreGameWithLightning(
      { ...state, lightning: { ...state.lightning!, roundId: "p999-lightning" } },
      puzzle,
    );
    expect(issue).toBe("invalid");
    expect(restored.lightning).toBeUndefined();
  });

  it("carries five-question saves forward, keeping their answers and leaving the new questions to play", () => {
    const first = answerLightningQuestion(started(finishedMainGame(puzzle), puzzle, 0, START), puzzle, 0, correct(0), START);
    if (!first.ok) throw new Error(first.error);
    const fiveQuestionSave = { ...first.state, lightning: { ...first.state.lightning!, results: first.state.lightning!.results.slice(0, 5) } };

    const { store, issue } = parseStore(JSON.stringify({ version: 1, games: { "2026-10-01": fiveQuestionSave } }));
    expect(issue).toBeNull();
    const lightning = store.games["2026-10-01"].lightning!;
    expect(lightning.results).toHaveLength(10);
    expect(lightningScore(lightning)).toBe(1);
    expect(currentLightningIndex(lightning)).toBe(1);
  });

  it("adds a lightning line to the share text once the bonus has been played", () => {
    let state = started(finishedMainGame(puzzle), puzzle, 0, START);
    const first = answerLightningQuestion(state, puzzle, 0, correct(0), START);
    if (!first.ok) throw new Error(first.error);
    state = first.state;

    const text = buildShareText({ puzzleNumber: 1, results: state.results, lightning: state.lightning!.results });
    expect(text.split("\n")).toContain("⚡ Lightning: 1/10 🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜");
    expect(buildShareText({ puzzleNumber: 1, results: state.results })).not.toContain("Lightning");
  });
});
