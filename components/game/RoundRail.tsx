"use client";

import { MODE_INFO, ROUND_MODES } from "@/lib/game/modes";
import type { RoundResult } from "@/types";
import { OUTCOME_STYLES } from "./outcome";

type RoundRailProps = {
  results: readonly (RoundResult | null)[];
  currentIndex: number | null;
  viewing: number | "results";
  onSelect: (index: number) => void;
};

export function RoundRail({ results, currentIndex, viewing, onSelect }: RoundRailProps) {
  const answered = results.filter((result) => result !== null).length;

  return (
    <nav aria-label="Rounds" className="pt-5">
      <ol className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {ROUND_MODES.map((mode, index) => {
          const result = results[index];
          const isCurrent = index === currentIndex;
          const isViewing = viewing === index;
          const style = result ? OUTCOME_STYLES[result.outcome] : null;
          const status = result ? style!.label : isCurrent ? "Up next" : "Locked";
          const label = `Round ${index + 1}, ${MODE_INFO[mode].name}: ${status}`;

          const marker = (
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                style
                  ? `${style.solid} border-transparent`
                  : isCurrent
                    ? "border-accent text-accent"
                    : "border-rule-strong text-muted"
              }`}
            >
              {style ? <style.Icon className="h-4 w-4" /> : index + 1}
            </span>
          );
          const name = (
            <span
              className={`text-[0.68rem] font-semibold uppercase tracking-[0.1em] sm:text-[0.72rem] ${
                isViewing ? "text-ink" : "text-muted"
              }`}
            >
              {MODE_INFO[mode].short}
            </span>
          );
          const frame = `flex w-full flex-col items-center gap-1.5 rounded-md px-1 pb-2 pt-2.5 border-b-2 ${
            isViewing ? "border-ink" : "border-transparent"
          }`;

          return (
            <li key={mode}>
              {result || isCurrent ? (
                <button
                  type="button"
                  onClick={() => onSelect(index)}
                  aria-label={label}
                  aria-current={isViewing ? "step" : undefined}
                  className={`${frame} hover:bg-rule/40`}
                >
                  {marker}
                  {name}
                </button>
              ) : (
                <div className={`${frame} opacity-80`} aria-label={label} role="img">
                  {marker}
                  {name}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      <p className="mt-2 text-right text-xs text-muted" aria-live="polite">
        {answered} of {ROUND_MODES.length} rounds played
      </p>
    </nav>
  );
}
