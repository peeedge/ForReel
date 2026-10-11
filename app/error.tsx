"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { SiteHeader } from "@/components/game/SiteHeader";

export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error("Reel Daily: unexpected error", error);
  }, [error]);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[42rem] flex-1 flex-col items-center gap-5 px-5 py-16 text-center">
        <h2 className="font-display text-4xl italic tracking-tight">The film snapped.</h2>
        <p className="max-w-sm leading-relaxed text-ink-soft">
          Something went wrong while loading today&apos;s reel. Your saved progress is safe in this browser.
        </p>
        <Button onClick={() => retry()}>Try again</Button>
      </main>
    </>
  );
}
