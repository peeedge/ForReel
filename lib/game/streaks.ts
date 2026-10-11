import { addDays, daysBetween, isValidDateKey, type DateKey } from "./dates";

export type Streaks = { current: number; best: number };

/**
 * A streak is a run of consecutive UTC puzzle days on which the player
 * finished all five rounds, whatever the score.
 *
 * The current streak counts back from today if today's puzzle is finished,
 * otherwise from yesterday, so an unplayed "today" never breaks a streak
 * before the day is over. Missing any full day resets the current streak to 0.
 * Dates after `today` are ignored.
 */
export function computeStreaks(completedDates: Iterable<DateKey>, today: DateKey): Streaks {
  const days = new Set<DateKey>();
  for (const date of completedDates) {
    if (isValidDateKey(date) && date <= today) days.add(date);
  }

  let best = 0;
  let run = 0;
  let previous: DateKey | null = null;
  for (const date of [...days].sort()) {
    run = previous !== null && daysBetween(previous, date) === 1 ? run + 1 : 1;
    best = Math.max(best, run);
    previous = date;
  }

  let current = 0;
  let cursor = days.has(today) ? today : addDays(today, -1);
  while (days.has(cursor)) {
    current += 1;
    cursor = addDays(cursor, -1);
  }

  return { current, best };
}
