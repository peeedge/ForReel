import type { GameRecord, PuzzleView } from "@/types";
import type { DateKey } from "./dates";
import { hasStarted, isGameComplete, restoreGameState } from "./engine";
import { totalPoints } from "./scoring";

export type ArchiveEntry = {
  date: DateKey;
  number: number;
  progress: "unplayed" | "in-progress" | "complete";
  /** Points from the five main rounds; null until the game is finished. */
  points: number | null;
};

type PlayableView = Extract<PuzzleView, { status: "ok" }>;

/** Every playable puzzle before `today`, newest first, with saved progress replayed through the engine. */
export function listArchive(
  views: Record<DateKey, PuzzleView>,
  games: Record<DateKey, GameRecord>,
  today: DateKey,
): ArchiveEntry[] {
  return Object.values(views)
    .filter((view): view is PlayableView => view.status === "ok" && view.date < today)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ date, number, puzzle }) => {
      const { state } = restoreGameState(games[date], puzzle);
      const complete = isGameComplete(state);
      return {
        date,
        number,
        progress: complete ? "complete" : hasStarted(state) ? "in-progress" : "unplayed",
        points: complete ? totalPoints(state.results) : null,
      };
    });
}
