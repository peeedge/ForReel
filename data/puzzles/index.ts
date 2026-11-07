import type { AuthoredPuzzle } from "@/types";
import { LIGHTNING_001_010 } from "./lightning-001-010";
import { LIGHTNING_011_020 } from "./lightning-011-020";
import { LIGHTNING_021_030 } from "./lightning-021-030";
import { LIGHTNING_031_040 } from "./lightning-031-040";
import { LIGHTNING_041_050 } from "./lightning-041-050";
import { LIGHTNING_051_061 } from "./lightning-051-061";
import { PUZZLES_001_010 } from "./puzzles-001-010";
import { PUZZLES_011_020 } from "./puzzles-011-020";
import { PUZZLES_021_030 } from "./puzzles-021-030";
import { PUZZLES_031_040 } from "./puzzles-031-040";
import { PUZZLES_041_050 } from "./puzzles-041-050";
import { PUZZLES_051_061 } from "./puzzles-051-061";

const LIGHTNING_BY_NUMBER = new Map(
  [
    ...LIGHTNING_001_010,
    ...LIGHTNING_011_020,
    ...LIGHTNING_021_030,
    ...LIGHTNING_031_040,
    ...LIGHTNING_041_050,
    ...LIGHTNING_051_061,
  ].map((entry) => [entry.number, entry.lightning]),
);

/**
 * Pre-authored daily puzzles, ordered by puzzle number. Puzzle N runs on
 * launch date + (N - 1) days. Server-only: import via lib/puzzles/server.
 */
export const PUZZLE_BANK: readonly AuthoredPuzzle[] = [
  ...PUZZLES_001_010,
  ...PUZZLES_011_020,
  ...PUZZLES_021_030,
  ...PUZZLES_031_040,
  ...PUZZLES_041_050,
  ...PUZZLES_051_061,
].map((puzzle) => {
  const lightning = LIGHTNING_BY_NUMBER.get(puzzle.number);
  return lightning ? { ...puzzle, lightning } : puzzle;
});
