import type { Question } from "@/types";

const LABEL = "mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted";

export function Clue({ question }: { question: Question }) {
  if (question.kind !== "multiple-choice") return null;

  if (question.mode === "cast" && question.actors) {
    const [first, second] = question.actors;
    return (
      <div className="my-6 border-y border-rule py-5 text-center">
        <p className="sr-only">
          The actors are {first} and {second}.
        </p>
        <p aria-hidden="true" className="font-display text-[1.6rem] leading-tight tracking-tight sm:text-[1.9rem]">
          {first}
          <span className="mx-3 font-normal italic text-accent">&amp;</span>
          {second}
        </p>
      </div>
    );
  }

  if (question.mode === "frame" && question.clue) {
    return (
      <figure className="my-6 border-l-2 border-accent pl-4">
        <figcaption className={LABEL}>The scene</figcaption>
        <p className="font-mono text-[0.92rem] leading-relaxed text-ink-soft">{question.clue}</p>
      </figure>
    );
  }

  if (question.mode === "quote" && question.clue) {
    return (
      <figure className="my-6 border-l-2 border-accent pl-4">
        <figcaption className={LABEL}>The moment</figcaption>
        <p className="font-display text-[1.15rem] italic leading-relaxed text-ink-soft">{question.clue}</p>
      </figure>
    );
  }

  return <div className="my-5" />;
}
