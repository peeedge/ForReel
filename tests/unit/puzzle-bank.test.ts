import { describe, expect, it } from "vitest";
import { PUZZLE_BANK } from "@/data/puzzles";
import { normalizeForMatch, puzzleBankSchema } from "@/lib/validation/question";

describe("bundled puzzle bank", () => {
  it("passes full bank validation (shape, numbering, unique IDs, no duplicate clues)", () => {
    const result = puzzleBankSchema.safeParse(PUZZLE_BANK);
    if (!result.success) throw new Error(result.error.message);
    expect(result.success).toBe(true);
  });

  it("contains at least 30 complete daily puzzles", () => {
    expect(PUZZLE_BANK.length).toBeGreaterThanOrEqual(30);
    for (const puzzle of PUZZLE_BANK) expect(puzzle.rounds).toHaveLength(5);
  });

  it("spreads correct answers across option positions instead of always the same slot", () => {
    const counts = new Map<string, number>();
    for (const puzzle of PUZZLE_BANK) {
      for (const { question } of puzzle.rounds) {
        if (question.kind === "multiple-choice") {
          counts.set(question.correctOptionId, (counts.get(question.correctOptionId) ?? 0) + 1);
        }
      }
    }
    const total = [...counts.values()].reduce((a, b) => a + b, 0);
    expect(counts.size).toBe(4);
    for (const count of counts.values()) expect(count / total).toBeLessThan(0.4);
  });

  it("never reuses a correct answer within the same round type", () => {
    for (const mode of ["frame", "cast", "quote", "final"] as const) {
      const answers = PUZZLE_BANK.map(({ rounds }) => rounds.map((round) => round.question))
        .flat()
        .filter((question) => question.kind === "multiple-choice" && question.mode === mode)
        .map((question) => {
          if (question.kind !== "multiple-choice") throw new Error("unreachable");
          return normalizeForMatch(question.options.find((option) => option.id === question.correctOptionId)!.text);
        });
      expect(new Set(answers).size).toBe(answers.length);
    }
  });

  it("gives every puzzle a lightning round", () => {
    for (const puzzle of PUZZLE_BANK) {
      expect(puzzle.lightning, `puzzle ${puzzle.number}`).toBeDefined();
      expect(puzzle.lightning!.editorial.sources.length).toBeGreaterThan(0);
    }
  });

  it("keeps editorial sources on every question", () => {
    for (const puzzle of PUZZLE_BANK) {
      for (const round of puzzle.rounds) {
        expect(round.editorial.sources.length).toBeGreaterThan(0);
        expect(["draft", "pending-review", "verified"]).toContain(round.editorial.status);
      }
    }
  });
});
