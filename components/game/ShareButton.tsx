"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ShareIcon } from "@/components/ui/Icons";
import { buildShareText } from "@/lib/game/share";
import type { LightningRecord, RoundResult } from "@/types";

type Props = { puzzleNumber: number; results: readonly (RoundResult | null)[]; lightning?: LightningRecord };

export function ShareButton({ puzzleNumber, results, lightning }: Props) {
  const [status, setStatus] = useState("");
  const [manualText, setManualText] = useState<string | null>(null);

  const share = async () => {
    const url = `${window.location.origin}${process.env.NEXT_PUBLIC_BASE_PATH}`;
    const text = buildShareText({ puzzleNumber, results, lightning: lightning?.results, url });
    setManualText(null);

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ text });
        setStatus("Shared.");
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.warn("Box Score: Web Share failed, falling back to clipboard.", error);
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setStatus("Results copied to your clipboard.");
    } catch (error) {
      console.warn("Box Score: clipboard write failed.", error);
      setManualText(text);
      setStatus("Couldn't copy automatically. Select the text below to copy it.");
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <Button onClick={share} className="w-full sm:w-auto sm:min-w-56">
        <ShareIcon className="h-4 w-4" />
        Share results
      </Button>
      <p role="status" className="min-h-5 text-sm text-ink-soft">
        {status}
      </p>
      {manualText ? (
        <textarea
          readOnly
          aria-label="Shareable results"
          value={manualText}
          rows={4}
          onFocus={(event) => event.currentTarget.select()}
          className="w-full max-w-xs rounded-md border border-rule bg-paper-raised p-3 font-mono text-sm"
        />
      ) : null}
    </div>
  );
}
