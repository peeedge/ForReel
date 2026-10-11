import type { GameRecord } from "@/types";
import { toUtcDateKey, type DateKey } from "./dates";
import { ROUND_COUNT } from "./modes";
import { totalPoints } from "./scoring";
import { computeStreaks } from "./streaks";

export type Stats = {
  played: number;
  completed: number;
  currentStreak: number;
  bestStreak: number;
  totalCorrect: number;
  averageScore: number | null;
  perfectGames: number;
  /** Completed games bucketed by whole-point score, index 0 through 5. */
  distribution: number[];
};

export function computeStats(games: Record<DateKey, GameRecord>, today: DateKey): Stats {
  const records = Object.values(games);
  const started = records.filter((record) => record.results.some((result) => result !== null));
  const finished = started.filter((record) => record.results.every((result) => result !== null));
  const scores = finished.map((record) => totalPoints(record.results));
  const distribution = Array.from({ length: ROUND_COUNT + 1 }, () => 0);
  for (const score of scores) distribution[Math.floor(score)] += 1;

  const streaks = computeStreaks(
    finished.filter(finishedOnTheDay).map((record) => record.puzzleDate),
    today,
  );

  return {
    played: started.length,
    completed: finished.length,
    currentStreak: streaks.current,
    bestStreak: streaks.best,
    totalCorrect: started.reduce(
      (sum, record) => sum + record.results.filter((result) => result?.outcome === "correct").length,
      0,
    ),
    averageScore: scores.length ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10 : null,
    perfectGames: scores.filter((score) => score === ROUND_COUNT).length,
    distribution,
  };
}

/** Archive games finished after their own UTC day still count as played, but never towards a streak. */
function finishedOnTheDay(record: GameRecord): boolean {
  return !record.completedAt || toUtcDateKey(new Date(record.completedAt)) === record.puzzleDate;
}
