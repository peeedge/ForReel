"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { nextResetUtcMs } from "@/lib/game/dates";
import { resultMessage } from "@/lib/game/messages";
import { ROUND_COUNT } from "@/lib/game/modes";
import { formatPuzzleNumber } from "@/lib/game/schedule";
import { formatPoints, totalPoints } from "@/lib/game/scoring";
import type { Stats } from "@/lib/game/stats";
import type { GameRecord } from "@/types";
import { Countdown } from "./Countdown";
import { ScoreGrid } from "./ScoreGrid";
import { ShareButton } from "./ShareButton";

type Props = {
  game: GameRecord;
  stats: Stats;
  onReview: () => void;
  focusHeading: boolean;
};

export function ResultsPanel({ game, stats, onReview, focusHeading }: Props) {
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

      <ShareButton puzzleNumber={game.puzzleNumber} results={game.results} />
      <Button variant="quiet" onClick={onReview}>
        Review answers and explanations
      </Button>

      <div className="w-full border-t border-rule pt-6">
        <Countdown targetMs={nextResetUtcMs(game.puzzleDate)} />
      </div>
    </section>
  );
}
