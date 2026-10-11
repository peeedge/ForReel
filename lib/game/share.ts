import type { LightningResult, Outcome, RoundResult } from "@/types";
import { LIGHTNING_QUESTION_COUNT, ROUND_COUNT } from "./modes";
import { formatPuzzleNumber } from "./schedule";
import { formatPoints, totalPoints } from "./scoring";

export const SHARE_SYMBOLS: Record<Outcome | "unanswered", string> = {
  correct: "🟩",
  partial: "🟨",
  incorrect: "🟥",
  unanswered: "⬜",
};

const squares = (results: readonly ({ outcome: Outcome } | null)[]) =>
  results.map((result) => SHARE_SYMBOLS[result ? result.outcome : "unanswered"]).join("");

/** Spoiler-free summary: puzzle number, score, one square per round, and the lightning bonus once it's been played. */
export function buildShareText(options: {
  puzzleNumber: number;
  results: readonly (RoundResult | null)[];
  lightning?: readonly (LightningResult | null)[];
  url?: string;
}): string {
  const { puzzleNumber, results, lightning, url } = options;
  const lines = [
    `FOR REEL #${formatPuzzleNumber(puzzleNumber)}`,
    `Score: ${formatPoints(totalPoints(results))}/${ROUND_COUNT}`,
    squares(results),
  ];
  if (lightning?.some((result) => result !== null)) {
    const correct = lightning.filter((result) => result?.outcome === "correct").length;
    lines.push(`⚡ Lightning: ${correct}/${LIGHTNING_QUESTION_COUNT} ${squares(lightning)}`);
  }
  if (url) lines.push(url);
  return lines.join("\n");
}
