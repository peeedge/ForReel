"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { currentRoundIndex, hasStarted, submitAnswer, type SubmitError } from "@/lib/game/engine";
import {
  answerLightningQuestion,
  lightningDeadlineMs,
  restoreGameWithLightning,
  startLightningQuestion,
  type LightningError,
} from "@/lib/game/lightning";
import { ROUND_COUNT } from "@/lib/game/modes";
import type { Stats } from "@/lib/game/stats";
import { getStoreSnapshot, updateStore } from "@/lib/storage/browserStore";
import { upsertGame, type StoreData } from "@/lib/storage/persistence";
import type { Answer, GameRecord, LightningResult, PlayerPuzzle, RoundResult } from "@/types";
import { LightningRound } from "./LightningRound";
import { ResultsPanel } from "./ResultsPanel";
import { RoundRail, type RailView } from "./RoundRail";
import { RoundView } from "./RoundView";
import { StorageNotice } from "./StorageNotice";

type View = RailView;

const SUBMIT_ERRORS: Record<SubmitError, string> = {
  "puzzle-mismatch": "This answer is for a different puzzle. Reload the page to get today's.",
  "invalid-round": "That round doesn't exist.",
  "game-complete": "You've already finished today's puzzle.",
  "already-answered": "You've already answered this round. Answers are final.",
  "out-of-order": "Finish the earlier rounds first.",
  "invalid-answer": "That answer couldn't be read. Please try again.",
};

const LIGHTNING_ERRORS: Record<LightningError, string> = {
  "puzzle-mismatch": SUBMIT_ERRORS["puzzle-mismatch"],
  unavailable: "There's no lightning round today.",
  locked: "Finish all five rounds to unlock the lightning round.",
  "round-complete": "You've already finished today's lightning round.",
  "out-of-order": "That question has already been played, possibly in another tab.",
  "not-started": "That question's clock never started. Please try again.",
  "invalid-answer": SUBMIT_ERRORS["invalid-answer"],
};

type Props = { puzzle: PlayerPuzzle; store: StoreData; stats: Stats };

export function DailyPuzzle({ puzzle, store, stats }: Props) {
  const { state: game, issue } = useMemo(
    () => restoreGameWithLightning(store.games[puzzle.date], puzzle),
    [store, puzzle],
  );
  const current = currentRoundIndex(game);
  const [requestedView, setRequestedView] = useState<View | null>(null);
  const [focusOnView, setFocusOnView] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lightningRunning = lightningDeadlineMs(game.lightning) !== null;
  const fallbackView: View = current ?? (lightningRunning ? "lightning" : "results");
  let view: View = requestedView ?? fallbackView;
  if (typeof view === "string" && current !== null) view = current;
  if (view === "lightning" && !puzzle.lightning) view = fallbackView;
  if (typeof view === "number" && game.results[view] === null && view !== current) view = fallbackView;

  const goTo = (next: View) => {
    setRequestedView(next);
    setFocusOnView(true);
    setError(null);
  };

  // Re-read storage so a double submit, or a submit from another tab, can never overwrite an answered question.
  const latestGame = () => restoreGameWithLightning(getStoreSnapshot().store.games[puzzle.date], puzzle).state;

  const save = (outcome: { ok: true; state: GameRecord }) => {
    updateStore((saved) => upsertGame(saved, outcome.state));
    setError(null);
  };

  const handleSubmit = (roundIndex: number, answer: Answer): RoundResult | null => {
    const outcome = submitAnswer(latestGame(), puzzle, roundIndex, answer, new Date());
    if (!outcome.ok) {
      setError(SUBMIT_ERRORS[outcome.error]);
      return null;
    }
    save(outcome);
    setRequestedView(roundIndex);
    return outcome.result;
  };

  const handleLightningStart = (index: number): boolean => {
    const outcome = startLightningQuestion(latestGame(), puzzle, index, new Date());
    if (!outcome.ok) {
      setError(LIGHTNING_ERRORS[outcome.error]);
      return false;
    }
    save(outcome);
    setRequestedView("lightning");
    return true;
  };

  const handleLightningAnswer = (index: number, optionId: string | null): LightningResult | null => {
    const outcome = answerLightningQuestion(latestGame(), puzzle, index, optionId, new Date());
    if (!outcome.ok) {
      setError(LIGHTNING_ERRORS[outcome.error]);
      return null;
    }
    save(outcome);
    setRequestedView("lightning");
    return outcome.result;
  };

  const afterFinalRound: View = puzzle.lightning ? "lightning" : "results";

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
        <ResultsPanel
          game={game}
          lightning={puzzle.lightning}
          stats={stats}
          onReview={() => goTo(0)}
          onLightning={() => goTo("lightning")}
          focusHeading={focusOnView}
        />
      ) : view === "lightning" && puzzle.lightning ? (
        <LightningRound
          round={puzzle.lightning}
          record={game.lightning}
          onStart={handleLightningStart}
          onAnswer={handleLightningAnswer}
          onFinish={() => goTo("results")}
          focusHeading={focusOnView}
        />
      ) : typeof view === "number" ? (
        <>
          <RoundView
            key={puzzle.rounds[view].id}
            question={puzzle.rounds[view]}
            index={view}
            result={game.results[view]}
            onSubmit={(answer) => handleSubmit(view, answer)}
            onNext={() => goTo(view === ROUND_COUNT - 1 ? afterFinalRound : view + 1)}
            nextLabel={
              view !== ROUND_COUNT - 1 ? "Next round" : puzzle.lightning ? "On to the lightning round" : "See your results"
            }
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
      ) : null}
    </>
  );
}
