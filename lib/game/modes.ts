export const ROUND_MODES = ["frame", "cast", "quote", "timeline", "final"] as const;
export type RoundMode = (typeof ROUND_MODES)[number];
export const ROUND_COUNT = ROUND_MODES.length;

/** Bonus round played after the main five: rapid-fire questions that all share the same four answers. */
export const LIGHTNING_QUESTION_COUNT = 10;
export const LIGHTNING_SECONDS = 15;
export const LIGHTNING_OPTION_COUNT = 4;

export type ModeInfo = {
  name: string;
  short: string;
  tagline: string;
  defaultPrompt: string;
};

export const MODE_INFO: Record<RoundMode, ModeInfo> = {
  frame: {
    name: "Frame of Reference",
    short: "Frame",
    tagline: "Name the film from a scene description.",
    defaultPrompt: "Which film does this scene describe?",
  },
  cast: {
    name: "Cast Connection",
    short: "Cast",
    tagline: "Two actors, one shared film.",
    defaultPrompt: "Which film features both of these actors?",
  },
  quote: {
    name: "Quote Detective",
    short: "Quote",
    tagline: "Trace a famous line or moment to its film.",
    defaultPrompt: "Which film is this famous moment from?",
  },
  timeline: {
    name: "Timeline",
    short: "Timeline",
    tagline: "Put four films in release order.",
    defaultPrompt: "Put these films in release order, earliest first.",
  },
  final: {
    name: "Final Cut",
    short: "Final",
    tagline: "One tougher question that ties facts together.",
    defaultPrompt: "",
  },
};
