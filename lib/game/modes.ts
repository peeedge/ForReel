export const ROUND_MODES = ["scout", "teammates", "replay", "timeline", "overtime"] as const;
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
  scout: {
    name: "Scouting Report",
    short: "Scout",
    tagline: "Name the athlete from a career description.",
    defaultPrompt: "Which athlete does this scouting report describe?",
  },
  teammates: {
    name: "Locker Room",
    short: "Teams",
    tagline: "Two athletes, one team they both played for.",
    defaultPrompt: "Which team did both of these athletes play for?",
  },
  replay: {
    name: "Instant Replay",
    short: "Replay",
    tagline: "Trace a famous play, quote or moment to the athlete behind it.",
    defaultPrompt: "Who is at the center of this famous moment?",
  },
  timeline: {
    name: "Timeline",
    short: "Timeline",
    tagline: "Put four sporting moments in chronological order.",
    defaultPrompt: "Put these moments in chronological order, earliest first.",
  },
  overtime: {
    name: "Overtime",
    short: "Overtime",
    tagline: "One tougher question about records and championships.",
    defaultPrompt: "",
  },
};
