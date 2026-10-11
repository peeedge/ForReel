import type { z } from "zod";
import type {
  authoredPuzzleSchema,
  authoredQuestionSchema,
  editorialSchema,
  lightningQuestionSchema,
  lightningRoundSchema,
  multipleChoiceQuestionSchema,
  playerPuzzleSchema,
  questionSchema,
  sourceSchema,
  timelineQuestionSchema,
} from "@/lib/validation/question";
import type {
  answerSchema,
  gameRecordSchema,
  lightningRecordSchema,
  lightningResultSchema,
  roundResultSchema,
} from "@/lib/validation/storage";

export type { DateKey } from "@/lib/game/dates";
export type { RoundMode } from "@/lib/game/modes";

export type MultipleChoiceQuestion = z.infer<typeof multipleChoiceQuestionSchema>;
export type TimelineQuestion = z.infer<typeof timelineQuestionSchema>;
export type Question = z.infer<typeof questionSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type Editorial = z.infer<typeof editorialSchema>;
export type AuthoredQuestion = z.infer<typeof authoredQuestionSchema>;
export type AuthoredPuzzle = z.infer<typeof authoredPuzzleSchema>;
export type LightningQuestion = z.infer<typeof lightningQuestionSchema>;
export type LightningRound = z.infer<typeof lightningRoundSchema>;
export type AuthoredLightning = NonNullable<AuthoredPuzzle["lightning"]>;
/** The only puzzle shape that is ever sent to the browser: no editorial metadata. */
export type PlayerPuzzle = z.infer<typeof playerPuzzleSchema>;

export type Answer = z.infer<typeof answerSchema>;
export type RoundResult = z.infer<typeof roundResultSchema>;
export type Outcome = RoundResult["outcome"];
export type Points = RoundResult["points"];
export type GameRecord = z.infer<typeof gameRecordSchema>;
export type LightningResult = z.infer<typeof lightningResultSchema>;
export type LightningRecord = z.infer<typeof lightningRecordSchema>;

export type PuzzleView =
  | { status: "ok"; date: string; number: number; puzzle: PlayerPuzzle }
  | { status: "missing"; date: string; number: number }
  | { status: "invalid"; date: string; number: number };
