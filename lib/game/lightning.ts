import type { GameRecord, LightningRecord, LightningResult, LightningRound, PlayerPuzzle } from "@/types";
import { isGameComplete, matchesPuzzle, restoreGameState, type RestoreIssue } from "./engine";
import { LIGHTNING_QUESTION_COUNT, LIGHTNING_SECONDS } from "./modes";

export const LIGHTNING_MS = LIGHTNING_SECONDS * 1000;
/** Allowance for the gap between the clock hitting zero in the browser and the answer being recorded. */
const LATE_GRACE_MS = 1000;

export type LightningError =
  | "puzzle-mismatch"
  | "unavailable"
  | "locked"
  | "round-complete"
  | "out-of-order"
  | "not-started"
  | "invalid-answer";

export type LightningOutcome<T> = ({ ok: true; state: GameRecord } & T) | { ok: false; error: LightningError };

function emptyRecord(round: LightningRound): LightningRecord {
  return { roundId: round.id, results: Array.from({ length: LIGHTNING_QUESTION_COUNT }, () => null) };
}

/** Index of the next lightning question, or null once all of them are answered. */
export function currentLightningIndex(record: LightningRecord | undefined): number | null {
  if (!record) return 0;
  const index = record.results.indexOf(null);
  return index === -1 ? null : index;
}

/** Epoch milliseconds at which the visible question's clock hits zero, or null when no clock is running. */
export function lightningDeadlineMs(record: LightningRecord | undefined): number | null {
  if (!record?.questionShownAt) return null;
  return Date.parse(record.questionShownAt) + LIGHTNING_MS;
}

export function lightningScore(record: LightningRecord | undefined): number {
  return record ? record.results.filter((result) => result?.outcome === "correct").length : 0;
}

function checkPlayable(state: GameRecord, puzzle: PlayerPuzzle, index: number): LightningError | null {
  if (!matchesPuzzle(state, puzzle)) return "puzzle-mismatch";
  if (!puzzle.lightning) return "unavailable";
  if (!isGameComplete(state)) return "locked";
  const current = currentLightningIndex(state.lightning);
  if (current === null) return "round-complete";
  if (index !== current) return "out-of-order";
  return null;
}

/** Reveals a question and starts its clock. Calling it again for a running question leaves the clock alone. */
export function startLightningQuestion(
  state: GameRecord,
  puzzle: PlayerPuzzle,
  index: number,
  now: Date,
): LightningOutcome<object> {
  const error = checkPlayable(state, puzzle, index);
  if (error) return { ok: false, error };
  const record = state.lightning ?? emptyRecord(puzzle.lightning!);
  if (record.questionShownAt) return { ok: true, state };
  return { ok: true, state: { ...state, lightning: { ...record, questionShownAt: now.toISOString() } } };
}

/** Records an answer, or a timeout when `optionId` is null. Answers that arrive after the clock ran out count as timeouts. */
export function answerLightningQuestion(
  state: GameRecord,
  puzzle: PlayerPuzzle,
  index: number,
  optionId: string | null,
  now: Date,
): LightningOutcome<{ result: LightningResult }> {
  const error = checkPlayable(state, puzzle, index);
  if (error) return { ok: false, error };
  const round = puzzle.lightning!;
  const record = state.lightning;
  if (!record?.questionShownAt) return { ok: false, error: "not-started" };
  if (optionId !== null && !round.options.some((option) => option.id === optionId)) {
    return { ok: false, error: "invalid-answer" };
  }

  const late = now.getTime() > Date.parse(record.questionShownAt) + LIGHTNING_MS + LATE_GRACE_MS;
  const result = scoreLightning(round, index, late ? null : optionId);
  const next: LightningRecord = {
    roundId: record.roundId,
    results: record.results.map((existing, position) => (position === index ? result : existing)),
  };
  return { ok: true, result, state: { ...state, lightning: next } };
}

function scoreLightning(round: LightningRound, index: number, optionId: string | null): LightningResult {
  const question = round.questions[index];
  return {
    questionId: question.id,
    optionId,
    outcome: optionId === question.correctOptionId ? "correct" : "incorrect",
  };
}

/**
 * Rebuilds saved lightning progress against today's round. Correctness is
 * re-derived from the puzzle; timeouts were already settled when they were saved.
 */
export function replayLightning(
  saved: LightningRecord | undefined,
  round: LightningRound | undefined,
): { record: LightningRecord | undefined; valid: boolean } {
  if (!saved) return { record: undefined, valid: true };
  if (!round || saved.roundId !== round.id) return { record: undefined, valid: false };

  const record = emptyRecord(round);
  for (let index = 0; index < LIGHTNING_QUESTION_COUNT; index++) {
    const entry = saved.results[index];
    if (!entry) {
      if (saved.questionShownAt) record.questionShownAt = saved.questionShownAt;
      return { record, valid: true };
    }
    const question = round.questions[index];
    const knownOption = entry.optionId === null || round.options.some((option) => option.id === entry.optionId);
    if (entry.questionId !== question.id || !knownOption) return { record, valid: false };
    record.results[index] = scoreLightning(round, index, entry.optionId);
  }
  return { record, valid: true };
}

/** `restoreGameState` plus the bonus round, which is only kept once the main game it follows replays cleanly. */
export function restoreGameWithLightning(
  saved: GameRecord | undefined,
  puzzle: PlayerPuzzle,
): { state: GameRecord; issue: RestoreIssue | null } {
  const restored = restoreGameState(saved, puzzle);
  if (!saved?.lightning || restored.issue || !isGameComplete(restored.state)) return restored;
  const { record, valid } = replayLightning(saved.lightning, puzzle.lightning);
  return {
    state: record ? { ...restored.state, lightning: record } : restored.state,
    issue: valid ? null : "invalid",
  };
}
