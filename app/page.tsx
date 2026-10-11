import { connection } from "next/server";
import { Suspense } from "react";
import { GameApp } from "@/components/game/GameApp";
import { PuzzleSkeleton } from "@/components/game/PuzzleSkeleton";
import { SiteHeader } from "@/components/game/SiteHeader";
import { getTodaysPuzzle } from "@/lib/puzzles/server";

export default function Home({ searchParams }: PageProps<"/">) {
  return (
    <Suspense fallback={<LoadingShell />}>
      <TodaysGame searchParams={searchParams} />
    </Suspense>
  );
}

async function TodaysGame({ searchParams }: Pick<PageProps<"/">, "searchParams">) {
  // The puzzle depends on the request's UTC date, so it must never be prerendered.
  await connection();
  const { date } = await searchParams;
  const view = getTodaysPuzzle({ now: new Date(), requestedDate: typeof date === "string" ? date : undefined });
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
