import { ROUND_COUNT } from "./modes";

export function resultMessage(points: number): string {
  if (points >= ROUND_COUNT) return "Flawless. The whole theater is on its feet.";
  if (points >= 4) return "That's a wrap — one take short of perfect.";
  if (points >= 3) return "A solid showing. The critics are warming up.";
  if (points >= 2) return "A cult classic in the making.";
  if (points >= 1) return "A rough cut. Tomorrow brings a fresh reel.";
  return "Even the greats get panned. Back in your seat tomorrow?";
}
