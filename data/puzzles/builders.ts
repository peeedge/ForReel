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
type TeammatesInput = ChoiceInput & { athletes: [string, string]; prompt?: string };
type OvertimeInput = ChoiceInput & { prompt: string; category?: string };
type TimelineInput = {
  events: [title: string, year: number][];
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
  scout: ClueInput;
  teammates: TeammatesInput;
  replay: ClueInput;
  timeline: TimelineInput;
  overtime: OvertimeInput;
};

const OPTION_IDS = ["a", "b", "c", "d"] as const;

/** Every bundled question is drafted from reference sources and awaits a human fact-check. */
const DEFAULT_STATUS: Editorial["status"] = "pending-review";

export function wiki(article: string): Source {
  return { name: "Wikipedia", url: `https://en.wikipedia.org/wiki/${article}` };
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
  mode: "scout" | "teammates" | "replay" | "overtime",
  input: ChoiceInput,
  fields: { prompt: string; category: string; difficulty: Difficulty; clue?: string; athletes?: [string, string] },
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
      ...(fields.athletes ? { athletes: fields.athletes } : {}),
      options,
      correctOptionId: OPTION_IDS[texts.indexOf(input.answer)],
    },
    editorial: editorial(input.sources, input.notes),
  };
}

function timeline(id: string, input: TimelineInput): AuthoredQuestion {
  const events = input.events.map(([title, year], index) => ({ id: `e${index + 1}`, title, year }));
  const correctOrder = [...events].sort((a, b) => a.year - b.year).map((event) => event.id);
  let presented = seededShuffle(events, id);
  if (presented.every((event, index) => event.id === correctOrder[index])) {
    presented = [...presented.slice(1), presented[0]];
  }
  const order = correctOrder
    .map((eventId) => events.find((event) => event.id === eventId)!)
    .map((event) => `${event.title} (${event.year})`)
    .join(", ");
  return {
    question: {
      id,
      kind: "timeline",
      mode: "timeline",
      prompt: MODE_INFO.timeline.defaultPrompt,
      explanation: `In order: ${order}.${input.note ? ` ${input.note}` : ""}`,
      difficulty: 2,
      category: "Sports history",
      events: presented,
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
      choice(`${prefix}-scout`, "scout", input.scout, {
        prompt: input.scout.prompt ?? MODE_INFO.scout.defaultPrompt,
        category: "Careers",
        difficulty: 1,
        clue: input.scout.clue,
      }),
      choice(`${prefix}-teammates`, "teammates", input.teammates, {
        prompt: input.teammates.prompt ?? MODE_INFO.teammates.defaultPrompt,
        category: "Rosters",
        difficulty: 1,
        athletes: input.teammates.athletes,
      }),
      choice(`${prefix}-replay`, "replay", input.replay, {
        prompt: input.replay.prompt ?? MODE_INFO.replay.defaultPrompt,
        category: "Famous moments",
        difficulty: 2,
        clue: input.replay.clue,
      }),
      timeline(`${prefix}-timeline`, input.timeline),
      choice(`${prefix}-overtime`, "overtime", input.overtime, {
        prompt: input.overtime.prompt,
        category: input.overtime.category ?? "Records & titles",
        difficulty: 3,
      }),
    ],
  };
}
