/**
 * All puzzle dates are canonical UTC calendar dates in `YYYY-MM-DD` form.
 * Nothing in this module reads the host timezone.
 */
export type DateKey = string;

const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
export const MS_PER_DAY = 86_400_000;

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function toUtcDateKey(date: Date): DateKey {
  return date.toISOString().slice(0, 10);
}

export function dateKeyToUtcMs(key: DateKey): number {
  const [year, month, day] = key.split("-").map(Number);
  return Date.UTC(year, month - 1, day);
}

export function isValidDateKey(value: string): value is DateKey {
  if (!DATE_KEY_PATTERN.test(value)) return false;
  const ms = dateKeyToUtcMs(value);
  return Number.isFinite(ms) && toUtcDateKey(new Date(ms)) === value;
}

export function addDays(key: DateKey, days: number): DateKey {
  return toUtcDateKey(new Date(dateKeyToUtcMs(key) + days * MS_PER_DAY));
}

export function daysBetween(from: DateKey, to: DateKey): number {
  return Math.round((dateKeyToUtcMs(to) - dateKeyToUtcMs(from)) / MS_PER_DAY);
}

/** Epoch milliseconds of the UTC midnight that ends the given puzzle day. */
export function nextResetUtcMs(key: DateKey): number {
  return dateKeyToUtcMs(key) + MS_PER_DAY;
}

/** Formats without Intl so server and client output are byte-identical. */
export function formatLongDate(key: DateKey): string {
  const date = new Date(dateKeyToUtcMs(key));
  return `${WEEKDAYS[date.getUTCDay()]}, ${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

export function formatCountdown(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}
