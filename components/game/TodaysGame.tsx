"use client";

import { useSyncExternalStore } from "react";
import { toUtcDateKey } from "@/lib/game/dates";
import { puzzleNumberForDate, resolvePuzzleDate } from "@/lib/game/schedule";
import type { PuzzleSchedule } from "@/lib/puzzles/server";
import { GameApp } from "./GameApp";
import { PuzzleSkeleton } from "./PuzzleSkeleton";
import { SiteHeader } from "./SiteHeader";

const noSubscription = () => () => {};
const currentUtcDate = () => toUtcDateKey(new Date());
const requestedDate = () => new URLSearchParams(window.location.search).get("date");
const noDateOnServer = () => null;

export function TodaysGame({ schedule }: { schedule: PuzzleSchedule }) {
  // The page is prerendered once, so today's date can only be known in the browser.
  const today = useSyncExternalStore(noSubscription, currentUtcDate, noDateOnServer);
  const requested = useSyncExternalStore(noSubscription, requestedDate, noDateOnServer);
  if (!today) return <LoadingShell />;

  const date = resolvePuzzleDate({
    now: new Date(`${today}T00:00:00Z`),
    requestedDate: requested ?? undefined,
    allowOverride: schedule.allowDateOverride,
  });
  const view = schedule.views[date] ?? {
    status: "missing",
    date,
    number: puzzleNumberForDate(date, schedule.launchDate),
  };
  return <GameApp view={view} />;
}

function LoadingShell() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-[42rem] flex-1 px-5 pb-16">
        <PuzzleSkeleton />
      </main>
    </>
  );
}
