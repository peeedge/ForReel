import { ROUND_COUNT } from "./modes";

export function resultMessage(points: number): string {
  if (points >= ROUND_COUNT) return "A perfect game. The whole stadium is on its feet.";
  if (points >= 4) return "All-star stuff — one play short of perfect.";
  if (points >= 3) return "A solid win. The scouts are taking notes.";
  if (points >= 2) return "Still in the hunt. Hit the practice field tonight.";
  if (points >= 1) return "A rough outing. Tomorrow is a new game.";
  return "Even the greats strike out. Back in the lineup tomorrow?";
}
