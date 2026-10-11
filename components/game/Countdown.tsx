"use client";

import { Button } from "@/components/ui/Button";
import { formatCountdown } from "@/lib/game/dates";
import { useNowSeconds } from "./hooks";

/** Counts down to `targetMs`; once reached, offers a reload instead of swapping the puzzle mid-session. */
export function Countdown({ targetMs, label = "Next reel in" }: { targetMs: number; label?: string }) {
  const nowSeconds = useNowSeconds();
  const remaining = nowSeconds === null ? null : targetMs - nowSeconds * 1000;

  if (remaining !== null && remaining <= 0) {
    return (
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-ink-soft">A new reel is ready.</p>
        <Button variant="secondary" onClick={() => window.location.reload()}>
          Play today&apos;s puzzle
        </Button>
      </div>
    );
  }

  return (
    <p className="flex flex-col items-center gap-1">
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">{label}</span>
      <span role="timer" className="font-mono text-2xl tabular-nums tracking-tight">
        {remaining === null ? "--:--:--" : formatCountdown(remaining)}
      </span>
    </p>
  );
}
