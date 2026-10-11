"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { CheckIcon, CrossIcon } from "@/components/ui/Icons";
import type { Answer, MultipleChoiceQuestion, RoundResult } from "@/types";

const LETTERS = ["A", "B", "C", "D"];

type Props = {
  question: MultipleChoiceQuestion;
  result: RoundResult | null;
  onSubmit: (answer: Answer) => void;
};

export function MultipleChoiceRound({ question, result, onSubmit }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const answered = result !== null;
  const chosen = result?.answer.kind === "multiple-choice" ? result.answer.optionId : selected;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!answered && selected) onSubmit({ kind: "multiple-choice", optionId: selected });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={answered} className="space-y-2.5">
        <legend className="sr-only">Choose one answer</legend>
        {question.options.map((option, index) => {
          const isChosen = chosen === option.id;
          const isCorrect = option.id === question.correctOptionId;
          let tone = "border-rule bg-paper-raised hover:border-ink-soft";
          let tag: { text: string; className: string; correct: boolean } | null = null;
          if (answered && isCorrect) {
            tone = "border-correct bg-correct-soft";
            tag = { text: isChosen ? "Your pick · Correct" : "Correct answer", className: "text-correct", correct: true };
          } else if (answered && isChosen) {
            tone = "border-incorrect bg-incorrect-soft";
            tag = { text: "Your pick", className: "text-incorrect", correct: false };
          } else if (answered) {
            tone = "border-rule bg-transparent text-ink-soft";
          } else if (isChosen) {
            tone = "border-ink bg-paper-raised ring-1 ring-ink";
          }

          return (
            <label
              key={option.id}
              className={`flex min-h-14 w-full items-center gap-3.5 rounded-lg border px-4 py-3 transition-[border-color,background-color,box-shadow] duration-150 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                answered ? "cursor-default" : "cursor-pointer"
              } ${tone}`}
            >
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={isChosen}
                onChange={() => setSelected(option.id)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                  isChosen && !answered ? "border-ink bg-ink text-paper" : "border-rule-strong text-ink-soft"
                }`}
              >
                {LETTERS[index]}
              </span>
              <span className="flex-1 text-[1rem] font-medium leading-snug">{option.text}</span>
              {tag ? (
                <span className={`flex shrink-0 items-center gap-1 text-xs font-semibold ${tag.className}`}>
                  {tag.correct ? <CheckIcon className="h-4 w-4" /> : <CrossIcon className="h-4 w-4" />}
                  <span className="max-sm:sr-only">{tag.text}</span>
                </span>
              ) : null}
            </label>
          );
        })}
      </fieldset>
      {answered ? null : (
        <Button type="submit" disabled={!selected} className="mt-5 w-full">
          Lock it in
        </Button>
      )}
    </form>
  );
}
