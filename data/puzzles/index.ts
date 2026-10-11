import type { AuthoredPuzzle } from "@/types";
import { PUZZLES_001_010 } from "./puzzles-001-010";
import { PUZZLES_011_020 } from "./puzzles-011-020";
import { PUZZLES_021_030 } from "./puzzles-021-030";

/**
 * Pre-authored daily puzzles, ordered by puzzle number. Puzzle N runs on
 * launch date + (N - 1) days. Server-only: import via lib/puzzles/server.
 */
export const PUZZLE_BANK: readonly AuthoredPuzzle[] = [...PUZZLES_001_010, ...PUZZLES_011_020, ...PUZZLES_021_030];
