import { MODE_INFO, ROUND_MODES } from "@/lib/game/modes";
import type { RoundResult } from "@/types";
import { OUTCOME_STYLES } from "./outcome";

export function ScoreGrid({ results }: { results: readonly (RoundResult | null)[] }) {
  return (
    <ol aria-label="Round-by-round results" className="flex justify-center gap-2">
      {ROUND_MODES.map((mode, index) => {
        const result = results[index];
        const style = result ? OUTCOME_STYLES[result.outcome] : null;
        return (
          <li
            key={mode}
            className={`flex h-12 w-12 items-center justify-center rounded-md ${style ? style.solid : "border border-rule-strong"}`}
          >
            {style ? <style.Icon className="h-5 w-5" /> : null}
            <span className="sr-only">
              Round {index + 1}, {MODE_INFO[mode].name}: {style ? style.label : "Not played"}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
