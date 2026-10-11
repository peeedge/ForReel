import { addDays, daysBetween, isValidDateKey, toUtcDateKey, type DateKey } from "./dates";

/** Puzzle No. 1 is published on this UTC date; each following day advances by one. */
export const DEFAULT_LAUNCH_DATE: DateKey = "2026-10-01";

export function puzzleNumberForDate(date: DateKey, launchDate: DateKey = DEFAULT_LAUNCH_DATE): number {
  return daysBetween(launchDate, date) + 1;
}

export function dateForPuzzleNumber(number: number, launchDate: DateKey = DEFAULT_LAUNCH_DATE): DateKey {
  return addDays(launchDate, number - 1);
}

export function formatPuzzleNumber(number: number): string {
  return number > 0 ? String(number).padStart(3, "0") : "—";
}

export function resolvePuzzleDate(options: {
  now: Date;
  requestedDate?: string;
  allowOverride: boolean;
}): DateKey {
  const { now, requestedDate, allowOverride } = options;
  if (allowOverride && requestedDate && isValidDateKey(requestedDate)) return requestedDate;
  return toUtcDateKey(now);
}
