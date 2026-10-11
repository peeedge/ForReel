"use client";

import { MODE_INFO, ROUND_MODES } from "@/lib/game/modes";

function localResetTime(): string {
  return new Date(Date.UTC(2000, 0, 1)).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

/** Rendered only inside an open dialog, so reading the local timezone here cannot cause a hydration mismatch. */
export function HelpPanel() {
  return (
    <div className="space-y-6 leading-relaxed">
      <p className="font-display text-lg italic text-ink-soft">
        Five quick rounds of film trivia. Everyone gets the same reel, and a new one arrives every day.
      </p>

      <ol className="space-y-3">
        {ROUND_MODES.map((mode, index) => (
          <li key={mode} className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent text-sm font-semibold text-accent">
              {index + 1}
            </span>
            <p>
              <strong className="font-semibold">{MODE_INFO[mode].name}.</strong>{" "}
              <span className="text-ink-soft">{MODE_INFO[mode].tagline}</span>
            </p>
          </li>
        ))}
      </ol>

      <section className="space-y-2 border-t border-rule pt-4">
        <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">Scoring</h3>
        <ul className="list-disc space-y-1.5 pl-5 text-ink-soft marker:text-rule-strong">
          <li>Each round is worth one point, for a maximum of 5.</li>
          <li>
            In the Timeline round, a perfect order earns 1 point. Getting at least half the films in the right spot earns ½.
          </li>
          <li>You get one answer per round, and answers can&apos;t be changed once locked in.</li>
          <li>When you finish, you can review every answer and explanation.</li>
        </ul>
      </section>

      <section className="space-y-2 border-t border-rule pt-4">
        <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">New puzzles</h3>
        <p className="text-ink-soft">
          A new reel goes live every day at midnight UTC (that&apos;s {localResetTime()} where you are). Your progress is saved in
          this browser, so you can leave and come back.
        </p>
      </section>
    </div>
  );
}
