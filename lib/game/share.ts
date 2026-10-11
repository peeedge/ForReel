import type { Outcome, RoundResult } from "@/types";
import { ROUND_COUNT } from "./modes";
import { formatPuzzleNumber } from "./schedule";
import { formatPoints, totalPoints } from "./scoring";

export const SHARE_SYMBOLS: Record<Outcome | "unanswered", string> = {
  correct: "🟩",
  partial: "🟨",
  incorrect: "🟥",
  unanswered: "⬜",
};

/** Spoiler-free summary: puzzle number, score, and one square per round. */
export function buildShareText(options: {
  puzzleNumber: number;
  results: readonly (RoundResult | null)[];
  url?: string;
}): string {
  const { puzzleNumber, results, url } = options;
  const grid = results.map((result) => SHARE_SYMBOLS[result ? result.outcome : "unanswered"]).join("");
  const lines = [
    `REEL DAILY #${formatPuzzleNumber(puzzleNumber)}`,
    `Score: ${formatPoints(totalPoints(results))}/${ROUND_COUNT}`,
    grid,
  ];
  if (url) lines.push(url);
  return lines.join("\n");
}
