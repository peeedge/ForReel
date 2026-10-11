import type { Answer, GameRecord, PlayerPuzzle, RoundResult } from "@/types";
import { ROUND_COUNT } from "./modes";
import { evaluateAnswer } from "./scoring";

export type SubmitError =
  | "puzzle-mismatch"
  | "invalid-round"
  | "game-complete"
  | "already-answered"
  | "out-of-order"
  | "invalid-answer";

export type SubmitOutcome =
  | { ok: true; state: GameRecord; result: RoundResult }
  | { ok: false; error: SubmitError };

export function createGameState(puzzle: PlayerPuzzle): GameRecord {
  return {
    puzzleDate: puzzle.date,
    puzzleNumber: puzzle.number,
    questionIds: puzzle.rounds.map((question) => question.id),
    results: Array.from({ length: ROUND_COUNT }, () => null),
  };
}

export function matchesPuzzle(state: GameRecord, puzzle: PlayerPuzzle): boolean {
  return (
    state.puzzleDate === puzzle.date &&
    state.puzzleNumber === puzzle.number &&
    state.questionIds.length === puzzle.rounds.length &&
    state.questionIds.every((id, index) => id === puzzle.rounds[index].id)
  );
}

/** Index of the next round to play, or null once every round is answered. */
export function currentRoundIndex(state: GameRecord): number | null {
  const index = state.results.indexOf(null);
  return index === -1 ? null : index;
}

export function isGameComplete(state: GameRecord): boolean {
  return currentRoundIndex(state) === null;
}

export function hasStarted(state: GameRecord): boolean {
  return state.results.some((result) => result !== null);
}

export function submitAnswer(
  state: GameRecord,
  puzzle: PlayerPuzzle,
  roundIndex: number,
  answer: Answer,
  now: Date,
): SubmitOutcome {
  if (!matchesPuzzle(state, puzzle)) return { ok: false, error: "puzzle-mismatch" };
  if (!Number.isInteger(roundIndex) || roundIndex < 0 || roundIndex >= ROUND_COUNT) {
    return { ok: false, error: "invalid-round" };
  }
  const current = currentRoundIndex(state);
  if (current === null) return { ok: false, error: "game-complete" };
  if (state.results[roundIndex] !== null) return { ok: false, error: "already-answered" };
  if (roundIndex !== current) return { ok: false, error: "out-of-order" };

  const question = puzzle.rounds[roundIndex];
  const evaluation = evaluateAnswer(question, answer);
  if (!evaluation) return { ok: false, error: "invalid-answer" };

  const result: RoundResult = { questionId: question.id, answer, ...evaluation };
  const results = state.results.map((existing, index) => (index === roundIndex ? result : existing));
  const timestamp = now.toISOString();
  const complete = results.every((entry) => entry !== null);

  return {
    ok: true,
    result,
    state: {
      ...state,
      results,
      startedAt: state.startedAt ?? timestamp,
      ...(complete ? { completedAt: timestamp } : {}),
    },
  };
}

export type RestoreIssue = "mismatch" | "invalid";

/**
 * Rebuilds today's game from a stored record by replaying each saved answer
 * through the engine, so stored outcomes and points are never trusted as-is.
 */
export function restoreGameState(
  record: GameRecord | undefined,
  puzzle: PlayerPuzzle,
): { state: GameRecord; issue: RestoreIssue | null } {
  const fresh = createGameState(puzzle);
  if (!record) return { state: fresh, issue: null };
  if (!matchesPuzzle(record, puzzle)) return { state: fresh, issue: "mismatch" };

  let state = fresh;
  const replayTime = new Date(record.startedAt ?? 0);
  for (let index = 0; index < ROUND_COUNT; index++) {
    const saved = record.results[index];
    if (!saved) break;
    const replay = submitAnswer(state, puzzle, index, saved.answer, replayTime);
    if (!replay.ok) return { state: withTimestamps(state, record), issue: "invalid" };
    state = replay.state;
  }
  return { state: withTimestamps(state, record), issue: null };
}

function withTimestamps(state: GameRecord, record: GameRecord): GameRecord {
  const next: GameRecord = { ...state };
  delete next.startedAt;
  delete next.completedAt;
  if (hasStarted(state) && record.startedAt) next.startedAt = record.startedAt;
  if (isGameComplete(state) && record.completedAt) next.completedAt = record.completedAt;
  return next;
}
