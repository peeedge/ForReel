"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowDownIcon, ArrowUpIcon, CheckIcon, CrossIcon, GripIcon } from "@/components/ui/Icons";
import type { Answer, RoundResult, TimelineQuestion } from "@/types";

type Props = {
  question: TimelineQuestion;
  result: RoundResult | null;
  onSubmit: (answer: Answer) => void;
};

type Direction = "earlier" | "later";

function moveItem<T>(items: readonly T[], from: number, to: number): T[] {
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export function TimelineRound({ question, result, onSubmit }: Props) {
  const [order, setOrder] = useState(() => question.movies.map((movie) => movie.id));
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const listRef = useRef<HTMLOListElement>(null);
  const pendingFocus = useRef<{ id: string; direction: Direction } | null>(null);

  const answered = result !== null;
  const displayOrder = result?.answer.kind === "timeline" ? result.answer.order : order;
  const movieById = new Map(question.movies.map((movie) => [movie.id, movie]));
  const total = displayOrder.length;

  useEffect(() => {
    const target = pendingFocus.current;
    if (!target || !listRef.current) return;
    pendingFocus.current = null;
    const preferred = listRef.current.querySelector<HTMLButtonElement>(
      `[data-move="${target.id}:${target.direction}"]`,
    );
    const fallback = listRef.current.querySelector<HTMLButtonElement>(
      `[data-move="${target.id}:${target.direction === "earlier" ? "later" : "earlier"}"]`,
    );
    (preferred && !preferred.disabled ? preferred : fallback)?.focus();
  }, [order]);

  const announcePosition = (id: string, position: number) => {
    setAnnouncement(`${movieById.get(id)?.title} moved to position ${position + 1} of ${total}.`);
  };

  const move = (index: number, direction: Direction) => {
    const target = direction === "earlier" ? index - 1 : index + 1;
    if (target < 0 || target >= order.length) return;
    const id = order[index];
    pendingFocus.current = { id, direction };
    setOrder(moveItem(order, index, target));
    announcePosition(id, target);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLSpanElement>, id: string) => {
    if (answered || event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    setDraggingId(id);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLSpanElement>) => {
    if (!draggingId || !listRef.current) return;
    const rows = Array.from(listRef.current.querySelectorAll<HTMLElement>("[data-movie-id]"));
    let target = 0;
    for (const row of rows) {
      if (row.dataset.movieId === draggingId) continue;
      const rect = row.getBoundingClientRect();
      if (event.clientY > rect.top + rect.height / 2) target += 1;
    }
    setOrder((current) => {
      const from = current.indexOf(draggingId);
      return from === target ? current : moveItem(current, from, target);
    });
  };

  const endDrag = () => {
    if (!draggingId) return;
    announcePosition(draggingId, order.indexOf(draggingId));
    setDraggingId(null);
  };

  return (
    <div>
      {answered ? null : (
        <p id={`${question.id}-help`} className="mb-3 text-sm text-ink-soft">
          Drag the handles, or use the arrow buttons, to reorder. Earliest release goes at the top.
        </p>
      )}
      <ol
        ref={listRef}
        aria-label="Films in your chosen order"
        aria-describedby={answered ? undefined : `${question.id}-help`}
        className="space-y-2"
      >
        {displayOrder.map((id, index) => {
          const movie = movieById.get(id)!;
          const inPlace = question.correctOrder[index] === id;
          const correctPosition = question.correctOrder.indexOf(id) + 1;
          const tone = answered
            ? inPlace
              ? "border-correct bg-correct-soft"
              : "border-incorrect bg-incorrect-soft"
            : draggingId === id
              ? "border-ink bg-paper-raised shadow-[0_10px_24px_-12px_rgb(28_26_23/0.5)] animate-settle"
              : "border-rule bg-paper-raised";

          return (
            <li
              key={id}
              data-movie-id={id}
              className={`flex min-h-16 items-center gap-2 rounded-lg border py-2 pl-1.5 pr-2 transition-[border-color,background-color] ${tone}`}
            >
              {answered ? (
                <span className={`flex h-10 w-10 items-center justify-center ${inPlace ? "text-correct" : "text-incorrect"}`}>
                  {inPlace ? <CheckIcon className="h-5 w-5" /> : <CrossIcon className="h-5 w-5" />}
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  onPointerDown={(event) => handlePointerDown(event, id)}
                  onPointerMove={handlePointerMove}
                  onPointerUp={endDrag}
                  onPointerCancel={endDrag}
                  className="flex h-11 w-10 shrink-0 cursor-grab touch-none select-none items-center justify-center rounded text-muted hover:text-ink active:cursor-grabbing"
                >
                  <GripIcon className="h-5 w-5" />
                </span>
              )}
              <span aria-hidden="true" className="w-5 shrink-0 font-display text-lg text-muted">
                {index + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium leading-snug">{movie.title}</span>
                {answered ? (
                  <span className="block text-sm text-ink-soft">
                    {movie.releaseYear}
                    <span className={inPlace ? "text-correct" : "text-incorrect"}>
                      {inPlace ? " · in the right spot" : ` · belongs at No. ${correctPosition}`}
                    </span>
                  </span>
                ) : null}
              </span>
              {answered ? null : (
                <span className="flex shrink-0 gap-0.5">
                  <button
                    type="button"
                    data-move={`${id}:earlier`}
                    onClick={() => move(index, "earlier")}
                    disabled={index === 0}
                    aria-label={`Move ${movie.title} earlier`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-rule/60 disabled:text-rule-strong disabled:hover:bg-transparent"
                  >
                    <ArrowUpIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    data-move={`${id}:later`}
                    onClick={() => move(index, "later")}
                    disabled={index === displayOrder.length - 1}
                    aria-label={`Move ${movie.title} later`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-rule/60 disabled:text-rule-strong disabled:hover:bg-transparent"
                  >
                    <ArrowDownIcon className="h-5 w-5" />
                  </button>
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
      {answered ? null : (
        <Button onClick={() => onSubmit({ kind: "timeline", order })} className="mt-5 w-full">
          Lock in this order
        </Button>
      )}
    </div>
  );
}
