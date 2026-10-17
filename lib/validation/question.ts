import { z } from "zod";
import { isValidDateKey } from "@/lib/game/dates";
import { LIGHTNING_OPTION_COUNT, LIGHTNING_QUESTION_COUNT, ROUND_COUNT, ROUND_MODES } from "@/lib/game/modes";

const idSchema = z.string().regex(/^[a-z0-9][a-z0-9-]*$/, "IDs must be lowercase kebab-case");
const textSchema = z.string().trim().min(1);
const difficultySchema = z.union([z.literal(1), z.literal(2), z.literal(3)]);

/** Lowercase alphanumerics only, with a trailing "(1983)"-style disambiguator removed. */
export function normalizeForMatch(text: string): string {
  return text
    .replace(/\s*\(\d{4}\)\s*$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

const questionBase = {
  id: idSchema,
  prompt: textSchema,
  explanation: textSchema,
  difficulty: difficultySchema,
  category: textSchema,
};

export const optionSchema = z.object({ id: idSchema, text: textSchema });

export const multipleChoiceQuestionSchema = z
  .object({
    ...questionBase,
    kind: z.literal("multiple-choice"),
    mode: z.enum(["scout", "teammates", "replay", "overtime"]),
    clue: textSchema.optional(),
    athletes: z.tuple([textSchema, textSchema]).optional(),
    options: z.array(optionSchema).length(4, "Multiple-choice questions need exactly four options"),
    correctOptionId: idSchema,
  })
  .superRefine((question, ctx) => {
    const ids = question.options.map((option) => option.id);
    if (new Set(ids).size !== ids.length) {
      ctx.addIssue({ code: "custom", path: ["options"], message: "Option IDs must be unique" });
    }
    const texts = question.options.map((option) => normalizeForMatch(option.text));
    if (new Set(texts).size !== texts.length) {
      ctx.addIssue({ code: "custom", path: ["options"], message: "Option texts must be distinct" });
    }
    const correct = question.options.find((option) => option.id === question.correctOptionId);
    if (!correct) {
      ctx.addIssue({ code: "custom", path: ["correctOptionId"], message: "Correct option is not among the options" });
    } else if (!normalizeForMatch(question.explanation).includes(normalizeForMatch(correct.text))) {
      ctx.addIssue({ code: "custom", path: ["explanation"], message: "Explanation must name the correct answer" });
    }
    if ((question.mode === "scout" || question.mode === "replay") && !question.clue) {
      ctx.addIssue({ code: "custom", path: ["clue"], message: `${question.mode} questions need a clue` });
    }
    if (question.mode === "teammates") {
      if (!question.athletes) {
        ctx.addIssue({ code: "custom", path: ["athletes"], message: "Teammates questions need two athletes" });
      } else if (question.athletes[0] === question.athletes[1]) {
        ctx.addIssue({ code: "custom", path: ["athletes"], message: "Teammates questions need two different athletes" });
      }
    }
  });

export const timelineEventSchema = z.object({
  id: idSchema,
  title: textSchema,
  year: z.number().int().min(1800).max(2100),
});

export const timelineQuestionSchema = z
  .object({
    ...questionBase,
    kind: z.literal("timeline"),
    mode: z.literal("timeline"),
    events: z.array(timelineEventSchema).min(3).max(5),
    correctOrder: z.array(idSchema),
  })
  .superRefine((question, ctx) => {
    const ids = question.events.map((event) => event.id);
    if (new Set(ids).size !== ids.length) {
      ctx.addIssue({ code: "custom", path: ["events"], message: "Event IDs must be unique" });
    }
    const years = question.events.map((event) => event.year);
    if (new Set(years).size !== years.length) {
      ctx.addIssue({ code: "custom", path: ["events"], message: "Event years must be distinct so the order is unambiguous" });
    }
    const sameMembers =
      question.correctOrder.length === ids.length && question.correctOrder.every((id) => ids.includes(id));
    if (!sameMembers || new Set(question.correctOrder).size !== question.correctOrder.length) {
      ctx.addIssue({ code: "custom", path: ["correctOrder"], message: "correctOrder must list every event exactly once" });
      return;
    }
    const yearOf = new Map(question.events.map((event) => [event.id, event.year]));
    for (let i = 1; i < question.correctOrder.length; i++) {
      if (yearOf.get(question.correctOrder[i - 1])! >= yearOf.get(question.correctOrder[i])!) {
        ctx.addIssue({ code: "custom", path: ["correctOrder"], message: "correctOrder must be earliest-to-latest by year" });
        break;
      }
    }
    if (ids.every((id, i) => id === question.correctOrder[i])) {
      ctx.addIssue({ code: "custom", path: ["events"], message: "Events must not be presented already in order" });
    }
  });

export const questionSchema = z.discriminatedUnion("kind", [multipleChoiceQuestionSchema, timelineQuestionSchema]);

export const sourceSchema = z.object({ name: textSchema, url: z.url() });

export const editorialSchema = z.object({
  status: z.enum(["draft", "pending-review", "verified"]),
  sources: z.array(sourceSchema).min(1, "Every question needs at least one source"),
  notes: z.string().optional(),
});

export const authoredQuestionSchema = z.object({
  question: questionSchema,
  editorial: editorialSchema,
});

export const lightningQuestionSchema = z.object({
  id: idSchema,
  prompt: textSchema,
  explanation: textSchema,
  correctOptionId: idSchema,
});

export const lightningRoundSchema = z
  .object({
    id: idSchema,
    title: textSchema,
    options: z.array(optionSchema).length(LIGHTNING_OPTION_COUNT, "Lightning rounds need exactly four shared options"),
    questions: z.array(lightningQuestionSchema).length(LIGHTNING_QUESTION_COUNT),
  })
  .superRefine((round, ctx) => {
    const ids = round.options.map((option) => option.id);
    if (new Set(ids).size !== ids.length) {
      ctx.addIssue({ code: "custom", path: ["options"], message: "Option IDs must be unique" });
    }
    const texts = round.options.map((option) => normalizeForMatch(option.text));
    if (new Set(texts).size !== texts.length) {
      ctx.addIssue({ code: "custom", path: ["options"], message: "Option texts must be distinct" });
    }
    const questionIds = round.questions.map((question) => question.id);
    if (new Set(questionIds).size !== questionIds.length) {
      ctx.addIssue({ code: "custom", path: ["questions"], message: "Lightning question IDs must be unique" });
    }
    round.questions.forEach((question, index) => {
      const correct = round.options.find((option) => option.id === question.correctOptionId);
      if (!correct) {
        ctx.addIssue({ code: "custom", path: ["questions", index, "correctOptionId"], message: "Correct option is not among the options" });
      } else if (!normalizeForMatch(question.explanation).includes(normalizeForMatch(correct.text))) {
        ctx.addIssue({ code: "custom", path: ["questions", index, "explanation"], message: "Explanation must name the correct answer" });
      }
    });
    if (new Set(round.questions.map((question) => question.correctOptionId)).size < 3) {
      ctx.addIssue({ code: "custom", path: ["questions"], message: "Spread lightning answers across at least three of the options" });
    }
  });

export const authoredLightningSchema = z.object({
  round: lightningRoundSchema,
  editorial: editorialSchema,
});

function checkRoundModes(rounds: { mode: string; id: string }[], ctx: z.RefinementCtx) {
  rounds.forEach((round, index) => {
    if (round.mode !== ROUND_MODES[index]) {
      ctx.addIssue({
        code: "custom",
        path: ["rounds", index],
        message: `Round ${index + 1} must be a "${ROUND_MODES[index]}" question`,
      });
    }
  });
  const ids = rounds.map((round) => round.id);
  if (new Set(ids).size !== ids.length) {
    ctx.addIssue({ code: "custom", path: ["rounds"], message: "Question IDs must be unique within a puzzle" });
  }
}

export const authoredPuzzleSchema = z
  .object({
    number: z.number().int().positive(),
    rounds: z.array(authoredQuestionSchema).length(ROUND_COUNT),
    lightning: authoredLightningSchema.optional(),
  })
  .superRefine((puzzle, ctx) => checkRoundModes(puzzle.rounds.map((round) => round.question), ctx));

export const playerPuzzleSchema = z
  .object({
    number: z.number().int().positive(),
    date: z.string().refine(isValidDateKey, "Expected a YYYY-MM-DD date"),
    rounds: z.array(questionSchema).length(ROUND_COUNT),
    lightning: lightningRoundSchema.optional(),
  })
  .superRefine((puzzle, ctx) => checkRoundModes(puzzle.rounds, ctx));

/** Fingerprint used to catch the same clue being reused across the bank. */
function contentFingerprint(question: z.infer<typeof questionSchema>): string {
  if (question.kind === "timeline") {
    return `timeline:${question.events.map((event) => normalizeForMatch(event.title)).sort().join("|")}`;
  }
  if (question.mode === "teammates" && question.athletes) {
    return `teammates:${[...question.athletes].map(normalizeForMatch).sort().join("|")}`;
  }
  return `${question.mode}:${normalizeForMatch(question.clue ?? question.prompt)}`;
}

export const puzzleBankSchema = z.array(authoredPuzzleSchema).superRefine((bank, ctx) => {
  bank.forEach((puzzle, index) => {
    if (puzzle.number !== index + 1) {
      ctx.addIssue({ code: "custom", path: [index, "number"], message: `Expected puzzle number ${index + 1}` });
    }
  });
  const seenIds = new Map<string, number>();
  const seenContent = new Map<string, number>();
  const claim = (seen: Map<string, number>, key: string, number: number, describe: (owner: number) => string) => {
    const owner = seen.get(key);
    if (owner !== undefined) ctx.addIssue({ code: "custom", message: describe(owner) });
    seen.set(key, number);
  };
  bank.forEach((puzzle) => {
    const ids = puzzle.rounds.map(({ question }) => question.id);
    for (const { question } of puzzle.rounds) {
      const fingerprint = contentFingerprint(question);
      claim(seenContent, fingerprint, puzzle.number, (owner) => `Duplicate question content in puzzles ${owner} and ${puzzle.number}: ${fingerprint}`);
    }
    if (puzzle.lightning) {
      const { round } = puzzle.lightning;
      ids.push(round.id, ...round.questions.map((question) => question.id));
      const fingerprint = `lightning:${round.options.map((option) => normalizeForMatch(option.text)).sort().join("|")}`;
      claim(seenContent, fingerprint, puzzle.number, (owner) => `Puzzles ${owner} and ${puzzle.number} reuse the same lightning options`);
    }
    for (const id of ids) {
      claim(seenIds, id, puzzle.number, (owner) => `Question ID "${id}" is used by puzzles ${owner} and ${puzzle.number}`);
    }
  });
});
