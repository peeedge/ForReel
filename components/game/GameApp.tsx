"use client";

import { useMemo, useState } from "react";
import { Dialog } from "@/components/ui/Dialog";
import { ArchiveIcon, HelpIcon, StatsIcon } from "@/components/ui/Icons";
import { IconButton } from "@/components/ui/Button";
import { listArchive } from "@/lib/game/archive";
import { formatLongDate, nextResetUtcMs } from "@/lib/game/dates";
import { computeStats } from "@/lib/game/stats";
import type { DateKey, PuzzleView } from "@/types";
import { ArchivePanel, TODAY_HREF } from "./ArchivePanel";
import { Countdown } from "./Countdown";
import { DailyPuzzle } from "./DailyPuzzle";
import { Dateline } from "./Dateline";
import { HelpPanel } from "./HelpPanel";
import { useGameStore } from "./hooks";
import { PuzzleSkeleton } from "./PuzzleSkeleton";
import { SiteHeader } from "./SiteHeader";
import { StatsPanel } from "./StatsPanel";
import { StorageNotice } from "./StorageNotice";

type Props = {
  view: PuzzleView;
  today: DateKey;
  /** Every scheduled day's view, or null when past puzzles can't be opened. */
  archive: Record<DateKey, PuzzleView> | null;
};

export function GameApp({ view, today, archive }: Props) {
  const snapshot = useGameStore();
  const [openDialog, setOpenDialog] = useState<"help" | "stats" | "archive" | null>(null);
  const stats = useMemo(() => (snapshot ? computeStats(snapshot.store.games, today) : null), [snapshot, today]);
  const archiveEntries = useMemo(
    () => (archive && snapshot ? listArchive(archive, snapshot.store.games, today) : null),
    [archive, snapshot, today],
  );
  const isPastPuzzle = view.date < today;

  return (
    <>
      <SiteHeader
        actions={
          <>
            <IconButton label="How to play" onClick={() => setOpenDialog("help")}>
              <HelpIcon className="h-6 w-6" />
            </IconButton>
            {archive ? (
              <IconButton label="Archive" onClick={() => setOpenDialog("archive")}>
                <ArchiveIcon className="h-6 w-6" />
              </IconButton>
            ) : null}
            <IconButton label="Statistics" onClick={() => setOpenDialog("stats")}>
              <StatsIcon className="h-6 w-6" />
            </IconButton>
          </>
        }
      />
      <main className="mx-auto w-full max-w-[42rem] flex-1 px-5 pb-16">
        <Dateline date={view.date} number={view.number} />
        {isPastPuzzle ? <ArchiveBanner /> : null}
        {snapshot?.notice ? <StorageNotice kind={snapshot.notice} /> : null}

        {view.status !== "ok" ? (
          <Intermission view={view} />
        ) : snapshot && stats ? (
          <DailyPuzzle
            key={view.puzzle.date}
            puzzle={view.puzzle}
            store={snapshot.store}
            stats={stats}
            isArchive={isPastPuzzle}
          />
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
      <Dialog open={openDialog === "archive"} onClose={() => setOpenDialog(null)} title="Archive">
        <ArchivePanel entries={archiveEntries} viewing={view.date} />
      </Dialog>
    </>
  );
}

function ArchiveBanner() {
  return (
    <p className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-md border border-rule bg-paper-raised px-4 py-3 text-sm text-ink-soft">
      <span>You&apos;re playing a puzzle from the archive. It won&apos;t affect your streak.</span>
      <a
        href={TODAY_HREF}
        className="font-semibold text-ink underline decoration-rule-strong underline-offset-4 hover:decoration-ink"
      >
        Today&apos;s puzzle
      </a>
    </p>
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
        For Reel is an independent trivia game. Film titles and names are used for identification only. New puzzle daily at
        00:00 UTC.
      </p>
    </footer>
  );
}
