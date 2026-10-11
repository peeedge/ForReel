"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { nextResetUtcMs } from "@/lib/game/dates";
import { currentLightningIndex, lightningScore } from "@/lib/game/lightning";
import { resultMessage } from "@/lib/game/messages";
import { LIGHTNING_QUESTION_COUNT, ROUND_COUNT } from "@/lib/game/modes";
import { formatPuzzleNumber } from "@/lib/game/schedule";
import { formatPoints, totalPoints } from "@/lib/game/scoring";
import type { Stats } from "@/lib/game/stats";
import type { GameRecord, LightningRecord, LightningRound } from "@/types";
import { Countdown } from "./Countdown";
import { OUTCOME_STYLES } from "./outcome";
import { ScoreGrid } from "./ScoreGrid";
import { ShareButton } from "./ShareButton";

type Props = {
  game: GameRecord;
  lightning: LightningRound | undefined;
  stats: Stats;
  onReview: () => void;
  onLightning: () => void;
  focusHeading: boolean;
};

export function ResultsPanel({ game, lightning, stats, onReview, onLightning, focusHeading }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const points = totalPoints(game.results);

  useEffect(() => {
    if (focusHeading) headingRef.current?.focus();
  }, [focusHeading]);

  return (
    <section aria-labelledby="results-heading" className="flex animate-rise flex-col items-center gap-6 pt-8 text-center">
      <div>
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
          No. {formatPuzzleNumber(game.puzzleNumber)} · That&apos;s a wrap
        </p>
        <h2
          id="results-heading"
          ref={headingRef}
          tabIndex={-1}
          className="mt-3 font-display text-7xl leading-none tracking-tight focus:outline-none"
        >
          <span className="sr-only">You scored </span>
          {formatPoints(points)}
          <span className="text-4xl text-muted">
            <span aria-hidden="true">/</span>
            <span className="sr-only"> out of </span>
            {ROUND_COUNT}
          </span>
        </h2>
        <p className="mt-4 max-w-sm font-display text-xl italic text-ink-soft">{resultMessage(points)}</p>
      </div>

      <ScoreGrid results={game.results} />

      {lightning ? <LightningBonus record={game.lightning} onOpen={onLightning} /> : null}

      <dl className="grid w-full max-w-sm grid-cols-3 divide-x divide-rule border-y border-rule py-4">
        {[
          ["Current streak", stats.currentStreak],
          ["Best streak", stats.bestStreak],
          ["Played", stats.played],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col-reverse items-center gap-1 px-2">
            <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">{label}</dt>
            <dd className="font-display text-3xl leading-none">{value}</dd>
          </div>
        ))}
      </dl>

      <ShareButton puzzleNumber={game.puzzleNumber} results={game.results} lightning={game.lightning} />
      <Button variant="quiet" onClick={onReview}>
        Review answers and explanations
      </Button>

      <div className="w-full border-t border-rule pt-6">
        <Countdown targetMs={nextResetUtcMs(game.puzzleDate)} />
      </div>
    </section>
  );
}

function LightningBonus({ record, onOpen }: { record: LightningRecord | undefined; onOpen: () => void }) {
  const finished = record !== undefined && currentLightningIndex(record) === null;

  if (!finished) {
    return (
      <Button variant="secondary" onClick={onOpen} className="w-full sm:w-auto sm:min-w-56">
        {record ? "Finish the lightning round" : "Play the lightning round"}
      </Button>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
        Lightning bonus{" "}
        <span className="text-ink">
          {lightningScore(record)}/{LIGHTNING_QUESTION_COUNT}
        </span>
      </p>
      <ol aria-label="Lightning round results" className="flex gap-1.5">
        {record.results.map((result, index) => {
          const style = result ? OUTCOME_STYLES[result.outcome] : null;
          return (
            <li key={index} className={`flex h-7 w-7 items-center justify-center rounded ${style?.solid ?? "border border-rule-strong"}`}>
              {style ? <style.Icon className="h-3.5 w-3.5" /> : null}
              <span className="sr-only">
                Question {index + 1}: {style?.label ?? "Not played"}
              </span>
            </li>
          );
        })}
      </ol>
      <Button variant="quiet" onClick={onOpen}>
        Review the lightning round
      </Button>
    </div>
  );
}
