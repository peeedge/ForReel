import "server-only";
import { PUZZLE_BANK } from "@/data/puzzles";
import { isValidDateKey, type DateKey } from "@/lib/game/dates";
import { DEFAULT_LAUNCH_DATE, dateForPuzzleNumber, resolvePuzzleDate } from "@/lib/game/schedule";
import type { PuzzleView } from "@/types";
import { lookupPuzzle } from "./lookup";

export function getLaunchDate(): DateKey {
  const configured = process.env.REEL_DAILY_LAUNCH_DATE;
  if (!configured) return DEFAULT_LAUNCH_DATE;
  if (isValidDateKey(configured)) return configured;
  console.error(`Reel Daily: ignoring invalid REEL_DAILY_LAUNCH_DATE "${configured}"; using ${DEFAULT_LAUNCH_DATE}.`);
  return DEFAULT_LAUNCH_DATE;
}

/** `?date=` previews other days' puzzles, so it is off in production unless explicitly enabled. */
export function isDateOverrideAllowed(): boolean {
  return process.env.NODE_ENV !== "production" || process.env.REEL_DAILY_ALLOW_DATE_OVERRIDE === "1";
}

export function getTodaysPuzzle(options: { now: Date; requestedDate?: string }): PuzzleView {
  const date = resolvePuzzleDate({
    now: options.now,
    requestedDate: options.requestedDate,
    allowOverride: isDateOverrideAllowed(),
  });
  return lookupPuzzle(PUZZLE_BANK, date, getLaunchDate(), (message) => console.error(`Reel Daily: ${message}`));
}

export interface PuzzleSchedule {
  launchDate: DateKey;
  allowDateOverride: boolean;
  /** Every scheduled day's view, keyed by UTC date. Days not listed have no puzzle. */
  views: Record<DateKey, PuzzleView>;
}

/** The whole schedule, resolved at build time so a static host can pick today's puzzle in the browser. */
export function getPuzzleSchedule(): PuzzleSchedule {
  const launchDate = getLaunchDate();
  const views: Record<DateKey, PuzzleView> = {};
  for (const { number } of PUZZLE_BANK) {
    const date = dateForPuzzleNumber(number, launchDate);
    views[date] = lookupPuzzle(PUZZLE_BANK, date, launchDate, (message) => console.error(`Reel Daily: ${message}`));
  }
  return { launchDate, allowDateOverride: isDateOverrideAllowed(), views };
}
