import { describe, expect, it } from "vitest";
import { PUZZLE_BANK } from "@/data/puzzles";
import { listArchive } from "@/lib/game/archive";
import { createGameState, submitAnswer } from "@/lib/game/engine";
import { computeStats } from "@/lib/game/stats";
import { lookupPuzzle } from "@/lib/puzzles/lookup";
import type { GameRecord, PlayerPuzzle, PuzzleView } from "@/types";

const LAUNCH = "2026-10-01";

function viewFor(date: string): PuzzleView {
  return lookupPuzzle(PUZZLE_BANK, date, LAUNCH);
}

function puzzleFor(date: string): PlayerPuzzle {
  const view = viewFor(date);
  if (view.status !== "ok") throw new Error(`${date} is ${view.status}`);
  return view.puzzle;
}

function play(puzzle: PlayerPuzzle, rounds: number, at: Date): GameRecord {
  let state = createGameState(puzzle);
  for (let index = 0; index < rounds; index++) {
    const question = puzzle.rounds[index];
    const answer =
      question.kind === "multiple-choice"
        ? ({ kind: "multiple-choice", optionId: question.correctOptionId } as const)
        : ({ kind: "timeline", order: question.correctOrder } as const);
    const outcome = submitAnswer(state, puzzle, index, answer, at);
    if (!outcome.ok) throw new Error(outcome.error);
    state = outcome.state;
  }
  return state;
}

describe("listArchive", () => {
  const dates = ["2026-10-01", "2026-10-02", "2026-10-03", "2026-10-04"];
  const views = Object.fromEntries(dates.map((date) => [date, viewFor(date)]));

  it("lists only days before today, newest first, with saved progress", () => {
    const games = {
      "2026-10-01": play(puzzleFor("2026-10-01"), 5, new Date("2026-10-01T12:00:00Z")),
      "2026-10-02": play(puzzleFor("2026-10-02"), 2, new Date("2026-10-02T12:00:00Z")),
    };
    const entries = listArchive(views, games, "2026-10-04");

    expect(entries.map((entry) => entry.date)).toEqual(["2026-10-03", "2026-10-02", "2026-10-01"]);
    expect(entries.map((entry) => entry.progress)).toEqual(["unplayed", "in-progress", "complete"]);
    expect(entries[2].points).toBe(5);
    expect(entries[1].points).toBeNull();
  });

  it("skips days whose puzzle can't be played", () => {
    const entries = listArchive(
      { ...views, "2026-09-30": { status: "invalid", date: "2026-09-30", number: 0 } },
      {},
      "2026-10-04",
    );
    expect(entries.some((entry) => entry.date === "2026-09-30")).toBe(false);
  });
});

describe("streaks with archive play", () => {
  it("counts archive games as played but not towards a streak", () => {
    const games = {
      "2026-10-01": play(puzzleFor("2026-10-01"), 5, new Date("2026-10-01T12:00:00Z")),
      "2026-10-02": play(puzzleFor("2026-10-02"), 5, new Date("2026-10-03T09:00:00Z")),
      "2026-10-03": play(puzzleFor("2026-10-03"), 5, new Date("2026-10-03T10:00:00Z")),
    };
    const stats = computeStats(games, "2026-10-03");

    expect(stats.completed).toBe(3);
    expect(stats.currentStreak).toBe(1);
    expect(stats.bestStreak).toBe(1);
  });
});
