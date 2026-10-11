"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { Question, RoundResult } from "@/types";
import { OUTCOME_STYLES } from "./outcome";

const HEADLINES = { correct: "Correct", partial: "So close", incorrect: "Not quite" } as const;

export function feedbackSummary(question: Question, result: RoundResult): string {
  if (question.kind === "multiple-choice") {
    if (result.outcome === "correct") return "You got it.";
    const answer = question.options.find((option) => option.id === question.correctOptionId)?.text;
    return `The answer is ${answer}.`;
  }
  const placed = `${result.correctPositions} of ${result.totalPositions} films in the right spot`;
  if (result.outcome === "correct") return "Every film in the right spot.";
  if (result.outcome === "partial") return `${placed}: half a point.`;
  return `${placed}.`;
}

type Props = {
  question: Question;
  result: RoundResult;
  nextLabel: string;
  onNext: () => void;
  focusNext: boolean;
};

export function Feedback({ question, result, nextLabel, onNext, focusNext }: Props) {
  const nextRef = useRef<HTMLButtonElement>(null);
  const style = OUTCOME_STYLES[result.outcome];

  useEffect(() => {
    if (focusNext) nextRef.current?.focus();
  }, [focusNext]);

  return (
    <section aria-label="Answer feedback" className="mt-6 animate-rise border-t border-rule pt-5">
      <div className={`flex items-center gap-2 ${style.text}`}>
        <style.Icon className="h-5 w-5" />
        <p className="font-display text-xl font-semibold tracking-tight">{HEADLINES[result.outcome]}</p>
        <p className="ml-auto text-xs font-semibold uppercase tracking-[0.14em]">
          +{result.points === 0.5 ? "½" : result.points} {result.points === 1 ? "point" : "points"}
        </p>
      </div>
      <p className="mt-2 font-medium">{feedbackSummary(question, result)}</p>
      <p className="mt-2 leading-relaxed text-ink-soft">{question.explanation}</p>
      <Button ref={nextRef} onClick={onNext} className="mt-5 w-full">
        {nextLabel}
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </section>
  );
}
