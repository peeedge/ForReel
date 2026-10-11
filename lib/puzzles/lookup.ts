import type { DateKey } from "@/lib/game/dates";
import { puzzleNumberForDate } from "@/lib/game/schedule";
import { authoredPuzzleSchema, playerPuzzleSchema } from "@/lib/validation/question";
import type { AuthoredPuzzle, PlayerPuzzle, PuzzleView } from "@/types";

/** Strips editorial metadata so only player-facing fields leave the server. */
export function toPlayerPuzzle(authored: AuthoredPuzzle, date: DateKey): PlayerPuzzle {
  return playerPuzzleSchema.parse({
    number: authored.number,
    date,
    rounds: authored.rounds.map((round) => round.question),
    ...(authored.lightning ? { lightning: authored.lightning.round } : {}),
  });
}

export function lookupPuzzle(
  bank: readonly AuthoredPuzzle[],
  date: DateKey,
  launchDate: DateKey,
  onInvalid: (message: string) => void = () => {},
): PuzzleView {
  const number = puzzleNumberForDate(date, launchDate);
  const authored = bank.find((puzzle) => puzzle.number === number);
  if (!authored) return { status: "missing", date, number };

  const parsed = authoredPuzzleSchema.safeParse(authored);
  if (!parsed.success) {
    onInvalid(`Puzzle ${number} failed validation: ${parsed.error.message}`);
    return { status: "invalid", date, number };
  }
  return { status: "ok", date, number, puzzle: toPlayerPuzzle(parsed.data, date) };
}
