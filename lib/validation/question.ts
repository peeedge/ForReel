import { z } from "zod";
import { isValidDateKey } from "@/lib/game/dates";
import { ROUND_COUNT, ROUND_MODES } from "@/lib/game/modes";

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
    mode: z.enum(["frame", "cast", "quote", "final"]),
    clue: textSchema.optional(),
    actors: z.tuple([textSchema, textSchema]).optional(),
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
    if ((question.mode === "frame" || question.mode === "quote") && !question.clue) {
      ctx.addIssue({ code: "custom", path: ["clue"], message: `${question.mode} questions need a clue` });
    }
    if (question.mode === "cast") {
      if (!question.actors) {
        ctx.addIssue({ code: "custom", path: ["actors"], message: "Cast questions need two actors" });
      } else if (question.actors[0] === question.actors[1]) {
        ctx.addIssue({ code: "custom", path: ["actors"], message: "Cast questions need two different actors" });
      }
    }
  });

export const timelineMovieSchema = z.object({
  id: idSchema,
  title: textSchema,
  releaseYear: z.number().int().min(1888).max(2100),
});

export const timelineQuestionSchema = z
  .object({
    ...questionBase,
    kind: z.literal("timeline"),
    mode: z.literal("timeline"),
    movies: z.array(timelineMovieSchema).min(3).max(5),
    correctOrder: z.array(idSchema),
  })
  .superRefine((question, ctx) => {
    const ids = question.movies.map((movie) => movie.id);
    if (new Set(ids).size !== ids.length) {
      ctx.addIssue({ code: "custom", path: ["movies"], message: "Movie IDs must be unique" });
    }
    const years = question.movies.map((movie) => movie.releaseYear);
    if (new Set(years).size !== years.length) {
      ctx.addIssue({ code: "custom", path: ["movies"], message: "Release years must be distinct so the order is unambiguous" });
    }
    const sameMembers =
      question.correctOrder.length === ids.length && question.correctOrder.every((id) => ids.includes(id));
    if (!sameMembers || new Set(question.correctOrder).size !== question.correctOrder.length) {
      ctx.addIssue({ code: "custom", path: ["correctOrder"], message: "correctOrder must list every movie exactly once" });
      return;
    }
    const yearOf = new Map(question.movies.map((movie) => [movie.id, movie.releaseYear]));
    for (let i = 1; i < question.correctOrder.length; i++) {
      if (yearOf.get(question.correctOrder[i - 1])! >= yearOf.get(question.correctOrder[i])!) {
        ctx.addIssue({ code: "custom", path: ["correctOrder"], message: "correctOrder must be earliest-to-latest by release year" });
        break;
      }
    }
    if (ids.every((id, i) => id === question.correctOrder[i])) {
      ctx.addIssue({ code: "custom", path: ["movies"], message: "Movies must not be presented already in order" });
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
  })
  .superRefine((puzzle, ctx) => checkRoundModes(puzzle.rounds.map((round) => round.question), ctx));

export const playerPuzzleSchema = z
  .object({
    number: z.number().int().positive(),
    date: z.string().refine(isValidDateKey, "Expected a YYYY-MM-DD date"),
    rounds: z.array(questionSchema).length(ROUND_COUNT),
  })
  .superRefine((puzzle, ctx) => checkRoundModes(puzzle.rounds, ctx));

/** Fingerprint used to catch the same clue being reused across the bank. */
function contentFingerprint(question: z.infer<typeof questionSchema>): string {
  if (question.kind === "timeline") {
    return `timeline:${question.movies.map((movie) => normalizeForMatch(movie.title)).sort().join("|")}`;
  }
  if (question.mode === "cast" && question.actors) {
    return `cast:${[...question.actors].map(normalizeForMatch).sort().join("|")}`;
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
  bank.forEach((puzzle) => {
    for (const { question } of puzzle.rounds) {
      const idOwner = seenIds.get(question.id);
      if (idOwner !== undefined) {
        ctx.addIssue({ code: "custom", message: `Question ID "${question.id}" is used by puzzles ${idOwner} and ${puzzle.number}` });
      }
      seenIds.set(question.id, puzzle.number);
      const fingerprint = contentFingerprint(question);
      const contentOwner = seenContent.get(fingerprint);
      if (contentOwner !== undefined) {
        ctx.addIssue({ code: "custom", message: `Duplicate question content in puzzles ${contentOwner} and ${puzzle.number}: ${fingerprint}` });
      }
      seenContent.set(fingerprint, puzzle.number);
    }
  });
});
