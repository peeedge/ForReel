"use client";

import { useEffect, useId, useRef, useState } from "react";
import { MODE_INFO } from "@/lib/game/modes";
import type { Answer, Question, RoundResult } from "@/types";
import { Clue } from "./Clue";
import { Feedback, feedbackSummary } from "./Feedback";
import { MultipleChoiceRound } from "./MultipleChoiceRound";
import { OUTCOME_STYLES } from "./outcome";
import { TimelineRound } from "./TimelineRound";

type Props = {
  question: Question;
  index: number;
  result: RoundResult | null;
  onSubmit: (answer: Answer) => RoundResult | null;
  onNext: () => void;
  nextLabel: string;
  focusHeading: boolean;
};

export function RoundView({ question, index, result, onSubmit, onNext, nextLabel, focusHeading }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingId = useId();
  const [justSubmitted, setJustSubmitted] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (focusHeading) headingRef.current?.focus();
  }, [focusHeading]);

  const handleSubmit = (answer: Answer) => {
    const submitted = onSubmit(answer);
    if (!submitted) return;
    setJustSubmitted(true);
    setAnnouncement(`${OUTCOME_STYLES[submitted.outcome].label}. ${feedbackSummary(question, submitted)}`);
  };

  return (
    <section aria-labelledby={headingId} className="animate-rise pt-6">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
        Round {index + 1}
        <span aria-hidden="true" className="mx-1.5 text-rule-strong">
          /
        </span>
        {MODE_INFO[question.mode].name}
      </p>
      <h2
        id={headingId}
        ref={headingRef}
        tabIndex={-1}
        className="mt-2 font-display text-[1.6rem] leading-[1.18] tracking-tight focus:outline-none sm:text-[1.85rem]"
      >
        {question.prompt}
      </h2>
      <Clue question={question} />
      {question.kind === "multiple-choice" ? (
        <MultipleChoiceRound question={question} result={result} onSubmit={handleSubmit} />
      ) : (
        <TimelineRound question={question} result={result} onSubmit={handleSubmit} />
      )}
      <p aria-live="assertive" className="sr-only">
        {announcement}
      </p>
      {result ? (
        <Feedback question={question} result={result} nextLabel={nextLabel} onNext={onNext} focusNext={justSubmitted} />
      ) : null}
    </section>
  );
}
