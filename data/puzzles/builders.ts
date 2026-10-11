import { MODE_INFO } from "@/lib/game/modes";
import type { AuthoredLightning, AuthoredPuzzle, AuthoredQuestion, Editorial, Source } from "@/types";

type Difficulty = 1 | 2 | 3;

type ChoiceInput = {
  answer: string;
  wrong: [string, string, string];
  explanation: string;
  sources: Source[];
  difficulty?: Difficulty;
  notes?: string;
};

type ClueInput = ChoiceInput & { clue: string; prompt?: string };
type CastInput = ChoiceInput & { actors: [string, string]; prompt?: string };
type FinalInput = ChoiceInput & { prompt: string; category?: string };
type TimelineInput = {
  films: [title: string, releaseYear: number][];
  sources: Source[];
  note?: string;
  notes?: string;
};

type LightningInput = {
  title: string;
  /** Shown in this order for every question, so group the look-alikes together. */
  options: [string, string, string, string];
  questions: [prompt: string, answer: string, explanation: string][];
  sources: Source[];
  notes?: string;
};

export type PuzzleInput = {
  frame: ClueInput;
  cast: CastInput;
  quote: ClueInput;
  timeline: TimelineInput;
  final: FinalInput;
};

const OPTION_IDS = ["a", "b", "c", "d"] as const;

/** Every bundled question is drafted from reference sources and awaits a human fact-check. */
const DEFAULT_STATUS: Editorial["status"] = "pending-review";

export function wiki(article: string): Source {
  return { name: "Wikipedia", url: `https://en.wikipedia.org/wiki/${article}` };
}

export function oscars(ceremonyYear: number): Source {
  return { name: "Academy of Motion Picture Arts and Sciences", url: `https://www.oscars.org/oscars/ceremonies/${ceremonyYear}` };
}

function hashString(value: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/** Deterministic Fisher–Yates driven by the question ID, so authored order never leaks the answer. */
export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  let state = hashString(seed) || 1;
  const next = () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 0x100000000;
  };
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function editorial(sources: Source[], notes?: string): Editorial {
  return { status: DEFAULT_STATUS, sources, ...(notes ? { notes } : {}) };
}

function choice(
  id: string,
  mode: "frame" | "cast" | "quote" | "final",
  input: ChoiceInput,
  fields: { prompt: string; category: string; difficulty: Difficulty; clue?: string; actors?: [string, string] },
): AuthoredQuestion {
  const texts = seededShuffle([input.answer, ...input.wrong], id);
  const options = texts.map((text, index) => ({ id: OPTION_IDS[index], text }));
  return {
    question: {
      id,
      kind: "multiple-choice",
      mode,
      prompt: fields.prompt,
      explanation: input.explanation,
      difficulty: input.difficulty ?? fields.difficulty,
      category: fields.category,
      ...(fields.clue ? { clue: fields.clue } : {}),
      ...(fields.actors ? { actors: fields.actors } : {}),
      options,
      correctOptionId: OPTION_IDS[texts.indexOf(input.answer)],
    },
    editorial: editorial(input.sources, input.notes),
  };
}

function timeline(id: string, input: TimelineInput): AuthoredQuestion {
  const movies = input.films.map(([title, releaseYear], index) => ({ id: `m${index + 1}`, title, releaseYear }));
  const correctOrder = [...movies].sort((a, b) => a.releaseYear - b.releaseYear).map((movie) => movie.id);
  let presented = seededShuffle(movies, id);
  if (presented.every((movie, index) => movie.id === correctOrder[index])) {
    presented = [...presented.slice(1), presented[0]];
  }
  const order = correctOrder
    .map((movieId) => movies.find((movie) => movie.id === movieId)!)
    .map((movie) => `${movie.title} (${movie.releaseYear})`)
    .join(", ");
  return {
    question: {
      id,
      kind: "timeline",
      mode: "timeline",
      prompt: MODE_INFO.timeline.defaultPrompt,
      explanation: `Release order: ${order}.${input.note ? ` ${input.note}` : ""}`,
      difficulty: 2,
      category: "Release dates",
      movies: presented,
      correctOrder,
    },
    editorial: editorial(input.sources, input.notes),
  };
}

export type NumberedLightning = { number: number; lightning: AuthoredLightning };

export function lightning(number: number, input: LightningInput): NumberedLightning {
  const id = `p${String(number).padStart(3, "0")}-lightning`;
  const options = input.options.map((text, index) => ({ id: OPTION_IDS[index], text }));
  return {
    number,
    lightning: {
      round: {
        id,
        title: input.title,
        options,
        questions: input.questions.map(([prompt, answer, explanation], index) => ({
          id: `${id}-${index + 1}`,
          prompt,
          explanation,
          correctOptionId: options.find((option) => option.text === answer)?.id ?? "missing",
        })),
      },
      editorial: editorial(input.sources, input.notes),
    },
  };
}

export function puzzle(number: number, input: PuzzleInput): AuthoredPuzzle {
  const prefix = `p${String(number).padStart(3, "0")}`;
  return {
    number,
    rounds: [
      choice(`${prefix}-frame`, "frame", input.frame, {
        prompt: input.frame.prompt ?? MODE_INFO.frame.defaultPrompt,
        category: "Scenes",
        difficulty: 1,
        clue: input.frame.clue,
      }),
      choice(`${prefix}-cast`, "cast", input.cast, {
        prompt: input.cast.prompt ?? MODE_INFO.cast.defaultPrompt,
        category: "Casting",
        difficulty: 1,
        actors: input.cast.actors,
      }),
      choice(`${prefix}-quote`, "quote", input.quote, {
        prompt: input.quote.prompt ?? MODE_INFO.quote.defaultPrompt,
        category: "Lines & moments",
        difficulty: 2,
        clue: input.quote.clue,
      }),
      timeline(`${prefix}-timeline`, input.timeline),
      choice(`${prefix}-final`, "final", input.final, {
        prompt: input.final.prompt,
        category: input.final.category ?? "Awards & credits",
        difficulty: 3,
      }),
    ],
  };
}
