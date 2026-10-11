"use client";

import { useEffect, useEffectEvent, useId, useRef, useState, type ReactNode, type Ref } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon, CrossIcon } from "@/components/ui/Icons";
import { currentLightningIndex, LIGHTNING_MS, lightningDeadlineMs, lightningScore } from "@/lib/game/lightning";
import { LIGHTNING_QUESTION_COUNT, LIGHTNING_SECONDS } from "@/lib/game/modes";
import type { LightningRecord, LightningResult, LightningRound as Round } from "@/types";
import { useRemainingMs } from "./hooks";
import { OUTCOME_STYLES } from "./outcome";

const LETTERS = ["A", "B", "C", "D"];
/** How long the right answer stays on screen before the next question's clock starts. */
const REVEAL_MS = 1800;
const WARNING_SECONDS = 5;

type Props = {
  round: Round;
  record: LightningRecord | undefined;
  onStart: (index: number) => boolean;
  onAnswer: (index: number, optionId: string | null) => LightningResult | null;
  onFinish: () => void;
  focusHeading: boolean;
};

export function LightningRound({ round, record, onStart, onAnswer, onFinish, focusHeading }: Props) {
  const [reveal, setReveal] = useState<{ index: number; result: LightningResult } | null>(null);
  const current = currentLightningIndex(record);
  const deadline = lightningDeadlineMs(record);

  const advance = useEffectEvent((index: number) => {
    setReveal(null);
    if (index + 1 < LIGHTNING_QUESTION_COUNT) onStart(index + 1);
  });

  useEffect(() => {
    if (!reveal) return;
    const id = window.setTimeout(() => advance(reveal.index), REVEAL_MS);
    return () => window.clearTimeout(id);
  }, [reveal]);

  const answer = (index: number, optionId: string | null) => {
    const result = onAnswer(index, optionId);
    if (result) setReveal({ index, result });
  };

  if (reveal) return <RevealedQuestion round={round} record={record} index={reveal.index} result={reveal.result} />;
  if (current === null) return <LightningSummary round={round} record={record} onFinish={onFinish} />;
  if (deadline !== null) {
    return <ActiveQuestion key={current} round={round} record={record} index={current} deadline={deadline} onAnswer={answer} />;
  }
  return (
    <LightningIntro
      round={round}
      record={record}
      index={current}
      onStart={() => onStart(current)}
      onSkip={onFinish}
      focusHeading={focusHeading}
    />
  );
}

function Frame({
  index,
  record,
  heading,
  headingRef,
  animate = true,
  children,
}: {
  index: number | null;
  record: LightningRecord | undefined;
  heading: ReactNode;
  headingRef?: Ref<HTMLHeadingElement>;
  animate?: boolean;
  children: ReactNode;
}) {
  const headingId = useId();
  return (
    <section aria-labelledby={headingId} className={`pt-6 ${animate ? "animate-rise" : ""}`}>
      <div className="flex items-center gap-3">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
          Lightning round
          {index !== null ? (
            <>
              <span aria-hidden="true" className="mx-1.5 text-rule-strong">
                /
              </span>
              Question {index + 1} of {LIGHTNING_QUESTION_COUNT}
            </>
          ) : null}
        </p>
        <Pips record={record} index={index} />
      </div>
      <h2
        id={headingId}
        ref={headingRef}
        tabIndex={-1}
        className="mt-2 font-display text-[1.6rem] leading-[1.18] tracking-tight focus:outline-none sm:text-[1.85rem]"
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}

function Pips({ record, index }: { record: LightningRecord | undefined; index: number | null }) {
  return (
    <ol aria-hidden="true" className="ml-auto flex gap-1">
      {Array.from({ length: LIGHTNING_QUESTION_COUNT }, (_, position) => {
        const result = record?.results[position];
        const tone = result
          ? OUTCOME_STYLES[result.outcome].solid
          : position === index
            ? "bg-accent"
            : "bg-rule-strong/60";
        return <li key={position} className={`h-1.5 w-4 rounded-full ${tone}`} />;
      })}
    </ol>
  );
}

function LightningIntro({
  round,
  record,
  index,
  onStart,
  onSkip,
  focusHeading,
}: {
  round: Round;
  record: LightningRecord | undefined;
  index: number;
  onStart: () => void;
  onSkip: () => void;
  focusHeading: boolean;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const resuming = index > 0;

  useEffect(() => {
    if (focusHeading) headingRef.current?.focus();
  }, [focusHeading]);

  return (
    <Frame index={null} record={record} heading={round.title} headingRef={headingRef}>
      <p className="mt-3 leading-relaxed text-ink-soft">
        {resuming
          ? `Question ${index + 1} of ${LIGHTNING_QUESTION_COUNT} is ready. Its clock starts when you continue.`
          : `A bonus round: ${LIGHTNING_QUESTION_COUNT} rapid-fire questions, ${LIGHTNING_SECONDS} seconds each. Every question has the same four answers, and they're easy to mix up. Tap an answer to lock it in.`}
      </p>
      <ul aria-label="The four answers" className="my-6 grid grid-cols-2 gap-2">
        {round.options.map((option, position) => (
          <li
            key={option.id}
            className="flex items-center gap-2.5 rounded-lg border border-rule bg-paper-raised px-3 py-2.5 text-[0.95rem] font-medium"
          >
            <span aria-hidden="true" className="text-xs font-bold text-muted">
              {LETTERS[position]}
            </span>
            {option.text}
          </li>
        ))}
      </ul>
      <Button onClick={onStart} className="w-full">
        {resuming ? `Start question ${index + 1}` : "Start the clock"}
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
      {resuming ? null : (
        <div className="mt-4 text-center">
          <Button variant="quiet" onClick={onSkip}>
            Skip to results
          </Button>
        </div>
      )}
      <p className="mt-4 text-center text-xs text-muted">Bonus points don&apos;t change your daily score or streak.</p>
    </Frame>
  );
}

function ActiveQuestion({
  round,
  record,
  index,
  deadline,
  onAnswer,
}: {
  round: Round;
  record: LightningRecord | undefined;
  index: number;
  deadline: number;
  onAnswer: (index: number, optionId: string | null) => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const remaining = useRemainingMs(deadline, () => onAnswer(index, null));
  const question = round.questions[index];

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <Frame index={index} record={record} heading={question.prompt} headingRef={headingRef}>
      <Timer remainingMs={remaining ?? LIGHTNING_MS} />
      <Options round={round} onPick={(optionId) => onAnswer(index, optionId)} />
    </Frame>
  );
}

function Timer({ remainingMs }: { remainingMs: number }) {
  const seconds = Math.ceil(remainingMs / 1000);
  const urgent = seconds <= WARNING_SECONDS;
  const announcement = seconds <= WARNING_SECONDS ? `${WARNING_SECONDS} seconds left` : seconds <= 10 ? "10 seconds left" : "";

  return (
    <div className="mt-5 mb-6">
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">Time left</span>
        <span aria-hidden="true" className={`font-mono text-lg tabular-nums ${urgent ? "text-incorrect" : "text-ink"}`}>
          {seconds}s
        </span>
      </div>
      <div
        role="progressbar"
        aria-label="Time left"
        aria-valuemin={0}
        aria-valuemax={LIGHTNING_SECONDS}
        aria-valuenow={seconds}
        aria-valuetext={`${seconds} seconds left`}
        className="h-2.5 overflow-hidden rounded-full bg-rule/70"
      >
        <div
          className={`h-full w-full origin-left rounded-full transition-colors ${urgent ? "bg-incorrect" : "bg-ink"}`}
          style={{ transform: `scaleX(${remainingMs / LIGHTNING_MS})` }}
        />
      </div>
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}

function Options({
  round,
  onPick,
  revealed,
}: {
  round: Round;
  onPick?: (optionId: string) => void;
  revealed?: { correctOptionId: string; result: LightningResult };
}) {
  return (
    <ul className="space-y-2.5">
      {round.options.map((option, position) => {
        const isCorrect = option.id === revealed?.correctOptionId;
        const isPicked = option.id === revealed?.result.optionId;
        let tone = "border-rule bg-paper-raised hover:border-ink-soft";
        if (revealed) {
          tone = isCorrect
            ? "border-correct bg-correct-soft"
            : isPicked
              ? "border-incorrect bg-incorrect-soft"
              : "border-rule bg-transparent text-ink-soft";
        }
        return (
          <li key={option.id}>
            <button
              type="button"
              disabled={!onPick}
              onClick={() => onPick?.(option.id)}
              className={`flex min-h-14 w-full items-center gap-3.5 rounded-lg border px-4 py-3 text-left transition-[border-color,background-color] duration-150 disabled:cursor-default ${tone}`}
            >
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rule-strong text-xs font-bold text-ink-soft"
              >
                {LETTERS[position]}
              </span>
              <span className="flex-1 text-[1rem] font-medium leading-snug">{option.text}</span>
              {revealed && (isCorrect || isPicked) ? (
                <span className={`shrink-0 ${isCorrect ? "text-correct" : "text-incorrect"}`}>
                  {isCorrect ? <CheckIcon className="h-4 w-4" /> : <CrossIcon className="h-4 w-4" />}
                  <span className="sr-only">{isCorrect ? "Correct answer" : "Your pick"}</span>
                </span>
              ) : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function verdict(round: Round, index: number, result: LightningResult): string {
  if (result.outcome === "correct") return "Correct!";
  const answer = round.options.find((option) => option.id === round.questions[index].correctOptionId)?.text;
  return result.optionId === null ? `Time's up. It's ${answer}.` : `Not quite. It's ${answer}.`;
}

function RevealedQuestion({
  round,
  record,
  index,
  result,
}: {
  round: Round;
  record: LightningRecord | undefined;
  index: number;
  result: LightningResult;
}) {
  const verdictRef = useRef<HTMLParagraphElement>(null);
  const question = round.questions[index];
  const style = OUTCOME_STYLES[result.outcome];

  useEffect(() => {
    verdictRef.current?.focus();
  }, []);

  return (
    <Frame index={index} record={record} heading={question.prompt} animate={false}>
      <p
        ref={verdictRef}
        tabIndex={-1}
        className={`mt-5 mb-6 flex min-h-[2.75rem] items-center gap-2 font-display text-xl font-semibold focus:outline-none ${style.text}`}
      >
        <style.Icon className="h-5 w-5" />
        {verdict(round, index, result)}
      </p>
      <Options round={round} revealed={{ correctOptionId: question.correctOptionId, result }} />
    </Frame>
  );
}

function LightningSummary({
  round,
  record,
  onFinish,
}: {
  round: Round;
  record: LightningRecord | undefined;
  onFinish: () => void;
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const score = lightningScore(record);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <Frame
      index={null}
      record={record}
      headingRef={headingRef}
      heading={
        <>
          {round.title} <span className="text-muted">{score}/{LIGHTNING_QUESTION_COUNT}</span>
        </>
      }
    >
      <ol className="mt-5 divide-y divide-rule border-y border-rule">
        {round.questions.map((question, index) => {
          const result = record?.results[index];
          const style = result ? OUTCOME_STYLES[result.outcome] : null;
          const picked = round.options.find((option) => option.id === result?.optionId)?.text;
          return (
            <li key={question.id} className="flex gap-3 py-4">
              {style ? (
                <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${style.solid}`}>
                  <style.Icon className="h-3.5 w-3.5" />
                  <span className="sr-only">{style.label}.</span>
                </span>
              ) : null}
              <div>
                <p className="font-medium">{question.prompt}</p>
                <p className="mt-1 text-sm text-ink-soft">
                  {result?.outcome === "correct" ? null : <>Your answer: {picked ?? "ran out of time"}. </>}
                  {question.explanation}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
      <Button onClick={onFinish} className="mt-6 w-full">
        See your results
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </Frame>
  );
}
