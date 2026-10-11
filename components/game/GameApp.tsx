"use client";

import { useMemo, useState } from "react";
import { Dialog } from "@/components/ui/Dialog";
import { HelpIcon, StatsIcon } from "@/components/ui/Icons";
import { IconButton } from "@/components/ui/Button";
import { formatLongDate, nextResetUtcMs } from "@/lib/game/dates";
import { computeStats } from "@/lib/game/stats";
import type { DateKey, PuzzleView } from "@/types";
import { Countdown } from "./Countdown";
import { DailyPuzzle } from "./DailyPuzzle";
import { Dateline } from "./Dateline";
import { HelpPanel } from "./HelpPanel";
import { useGameStore } from "./hooks";
import { PuzzleSkeleton } from "./PuzzleSkeleton";
import { SiteHeader } from "./SiteHeader";
import { StatsPanel } from "./StatsPanel";
import { StorageNotice } from "./StorageNotice";

export function GameApp({ view, today }: { view: PuzzleView; today: DateKey }) {
  const snapshot = useGameStore();
  const [openDialog, setOpenDialog] = useState<"help" | "stats" | null>(null);
  const stats = useMemo(() => (snapshot ? computeStats(snapshot.store.games, today) : null), [snapshot, today]);

  return (
    <>
      <SiteHeader
        actions={
          <>
            <IconButton label="How to play" onClick={() => setOpenDialog("help")}>
              <HelpIcon className="h-6 w-6" />
            </IconButton>
            <IconButton label="Statistics" onClick={() => setOpenDialog("stats")}>
              <StatsIcon className="h-6 w-6" />
            </IconButton>
          </>
        }
      />
      <main className="mx-auto w-full max-w-[42rem] flex-1 px-5 pb-16">
        <Dateline date={view.date} number={view.number} />
        {snapshot?.notice ? <StorageNotice kind={snapshot.notice} /> : null}

        {view.status !== "ok" ? (
          <Intermission view={view} />
        ) : snapshot && stats ? (
          <DailyPuzzle key={view.puzzle.date} puzzle={view.puzzle} store={snapshot.store} stats={stats} />
        ) : (
          <PuzzleSkeleton />
        )}
      </main>
      <SiteFooter />

      <Dialog open={openDialog === "help"} onClose={() => setOpenDialog(null)} title="How to play">
        <HelpPanel />
      </Dialog>
      <Dialog open={openDialog === "stats"} onClose={() => setOpenDialog(null)} title="Your statistics">
        <StatsPanel stats={stats} />
      </Dialog>
    </>
  );
}

function Intermission({ view }: { view: Exclude<PuzzleView, { status: "ok" }> }) {
  const message =
    view.status === "invalid"
      ? "Today's puzzle didn't pass our quality checks, so we've held it back rather than show you something wrong."
      : `There's no puzzle scheduled for ${formatLongDate(view.date)}. The projectionist is changing reels.`;
  return (
    <section className="flex flex-col items-center gap-6 py-14 text-center" aria-labelledby="intermission-heading">
      <h2 id="intermission-heading" className="font-display text-4xl italic tracking-tight">
        Intermission
      </h2>
      <p className="max-w-sm leading-relaxed text-ink-soft">{message}</p>
      <Countdown targetMs={nextResetUtcMs(view.date)} label="Next check in" />
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <p className="mx-auto max-w-[42rem] px-5 py-5 text-xs leading-relaxed text-muted">
        Reel Daily is an independent trivia game. Film titles and names are used for identification only. New puzzle daily at
        00:00 UTC.
      </p>
    </footer>
  );
}
