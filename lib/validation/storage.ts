import { z } from "zod";
import { isValidDateKey } from "@/lib/game/dates";
import { LIGHTNING_QUESTION_COUNT, ROUND_COUNT } from "@/lib/game/modes";

export const STORAGE_KEY = "reel-daily";
export const STORAGE_VERSION = 2;

export const answerSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("multiple-choice"), optionId: z.string().min(1) }),
  z.object({ kind: z.literal("timeline"), order: z.array(z.string().min(1)).min(3).max(5) }),
]);

export const roundResultSchema = z.object({
  questionId: z.string().min(1),
  answer: answerSchema,
  outcome: z.enum(["correct", "partial", "incorrect"]),
  points: z.union([z.literal(0), z.literal(0.5), z.literal(1)]),
  correctPositions: z.number().int().min(0).optional(),
  totalPositions: z.number().int().min(1).optional(),
});

export const lightningResultSchema = z.object({
  questionId: z.string().min(1),
  /** Null when the clock ran out before an answer was picked. */
  optionId: z.string().min(1).nullable(),
  outcome: z.enum(["correct", "incorrect"]),
});

export const lightningRecordSchema = z
  .object({
    roundId: z.string().min(1),
    results: z.array(lightningResultSchema.nullable()).length(LIGHTNING_QUESTION_COUNT),
    /** When the current unanswered question was revealed; its clock runs from here, even across reloads. */
    questionShownAt: z.iso.datetime().optional(),
  })
  .superRefine((record, ctx) => {
    const firstGap = record.results.indexOf(null);
    if (firstGap !== -1 && record.results.slice(firstGap).some((result) => result !== null)) {
      ctx.addIssue({ code: "custom", path: ["results"], message: "Lightning questions must be answered in order" });
    }
    if (record.questionShownAt && firstGap === -1) {
      ctx.addIssue({ code: "custom", path: ["questionShownAt"], message: "A finished lightning round has no running clock" });
    }
  });

export const gameRecordSchema = z
  .object({
    puzzleDate: z.string().refine(isValidDateKey, "Expected a YYYY-MM-DD date"),
    puzzleNumber: z.number().int(),
    questionIds: z.array(z.string().min(1)).length(ROUND_COUNT),
    results: z.array(roundResultSchema.nullable()).length(ROUND_COUNT),
    startedAt: z.iso.datetime().optional(),
    completedAt: z.iso.datetime().optional(),
    lightning: lightningRecordSchema.optional(),
  })
  .superRefine((record, ctx) => {
    const firstGap = record.results.indexOf(null);
    if (firstGap !== -1 && record.results.slice(firstGap).some((result) => result !== null)) {
      ctx.addIssue({ code: "custom", path: ["results"], message: "Rounds must be answered in order" });
    }
    if (record.lightning && firstGap !== -1) {
      ctx.addIssue({ code: "custom", path: ["lightning"], message: "The lightning round unlocks only after every main round" });
    }
    record.results.forEach((result, index) => {
      if (result && result.questionId !== record.questionIds[index]) {
        ctx.addIssue({ code: "custom", path: ["results", index], message: "Result does not match its question" });
      }
    });
    if (record.completedAt && firstGap !== -1) {
      ctx.addIssue({ code: "custom", path: ["completedAt"], message: "Incomplete games cannot have a completion time" });
    }
  });

export const storeEnvelopeSchema = z.object({
  version: z.number().int(),
  games: z.record(z.string(), z.unknown()),
});
