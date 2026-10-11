"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { currentRoundIndex, hasStarted, restoreGameState, submitAnswer, type SubmitError } from "@/lib/game/engine";
import { ROUND_COUNT } from "@/lib/game/modes";
import type { Stats } from "@/lib/game/stats";
import { getStoreSnapshot, updateStore } from "@/lib/storage/browserStore";
import { upsertGame, type StoreData } from "@/lib/storage/persistence";
import type { Answer, PlayerPuzzle, RoundResult } from "@/types";
import { ResultsPanel } from "./ResultsPanel";
import { RoundRail } from "./RoundRail";
import { RoundView } from "./RoundView";
import { StorageNotice } from "./StorageNotice";

type View = number | "results";

const SUBMIT_ERRORS: Record<SubmitError, string> = {
  "puzzle-mismatch": "This answer is for a different puzzle. Reload the page to get today's.",
  "invalid-round": "That round doesn't exist.",
  "game-complete": "You've already finished today's puzzle.",
  "already-answered": "You've already answered this round. Answers are final.",
  "out-of-order": "Finish the earlier rounds first.",
  "invalid-answer": "That answer couldn't be read. Please try again.",
};

type Props = { puzzle: PlayerPuzzle; store: StoreData; stats: Stats };

export function DailyPuzzle({ puzzle, store, stats }: Props) {
  const { state: game, issue } = useMemo(
    () => restoreGameState(store.games[puzzle.date], puzzle),
    [store, puzzle],
  );
  const current = currentRoundIndex(game);
  const [requestedView, setRequestedView] = useState<View | null>(null);
  const [focusOnView, setFocusOnView] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fallbackView: View = current ?? "results";
  let view: View = requestedView ?? fallbackView;
  if (view === "results" && current !== null) view = current;
  if (typeof view === "number" && game.results[view] === null && view !== current) view = fallbackView;

  const goTo = (next: View) => {
    setRequestedView(next);
    setFocusOnView(true);
    setError(null);
  };

  const handleSubmit = (roundIndex: number, answer: Answer): RoundResult | null => {
    // Re-read storage so a double submit, or a submit from another tab, can never overwrite an answered round.
    const latest = restoreGameState(getStoreSnapshot().store.games[puzzle.date], puzzle).state;
    const outcome = submitAnswer(latest, puzzle, roundIndex, answer, new Date());
    if (!outcome.ok) {
      setError(SUBMIT_ERRORS[outcome.error]);
      return null;
    }
    updateStore((saved) => upsertGame(saved, outcome.state));
    setRequestedView(roundIndex);
    setError(null);
    return outcome.result;
  };

  return (
    <>
      {!hasStarted(game) ? (
        <p className="pt-5 font-display text-[1.1rem] italic leading-relaxed text-ink-soft">
          Five quick rounds of film trivia, the same for everyone and refreshed daily. Pick your answers carefully: each round
          gets one shot.
        </p>
      ) : null}
      {issue ? <StorageNotice kind={issue} /> : null}

      <RoundRail results={game.results} currentIndex={current} viewing={view} onSelect={goTo} />

      {error ? (
        <p role="alert" className="mt-4 rounded-md border border-incorrect/40 bg-incorrect-soft px-4 py-3 text-sm">
          {error}
        </p>
      ) : null}

      {view === "results" ? (
        <ResultsPanel game={game} stats={stats} onReview={() => goTo(0)} focusHeading={focusOnView} />
      ) : (
        <>
          <RoundView
            key={puzzle.rounds[view].id}
            question={puzzle.rounds[view]}
            index={view}
            result={game.results[view]}
            onSubmit={(answer) => handleSubmit(view, answer)}
            onNext={() => goTo(view === ROUND_COUNT - 1 ? "results" : view + 1)}
            nextLabel={view === ROUND_COUNT - 1 ? "See your results" : "Next round"}
            focusHeading={focusOnView}
          />
          {current === null ? (
            <div className="mt-6 text-center">
              <Button variant="quiet" onClick={() => goTo("results")}>
                Back to results
              </Button>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
