import type { ArchiveEntry } from "@/lib/game/archive";
import { formatLongDate } from "@/lib/game/dates";
import { ROUND_COUNT } from "@/lib/game/modes";
import { formatPuzzleNumber } from "@/lib/game/schedule";
import { formatPoints } from "@/lib/game/scoring";

export const TODAY_HREF = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`;

export function archiveHref(date: string): string {
  return `${TODAY_HREF}?date=${date}`;
}

export function ArchivePanel({ entries, viewing }: { entries: ArchiveEntry[] | null; viewing: string }) {
  if (!entries) return <p className="text-ink-soft">Loading the archive…</p>;
  if (!entries.length) {
    return <p className="text-ink-soft">No earlier puzzles yet. Come back tomorrow to replay today&apos;s.</p>;
  }

  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-ink-soft">
        Catch up on puzzles you missed or finish ones you started. Archive games count towards your stats but not your streak.
      </p>
      <ol className="-mx-2 divide-y divide-rule border-y border-rule">
        {entries.map((entry) => (
          <li key={entry.date}>
            <a
              href={archiveHref(entry.date)}
              aria-current={entry.date === viewing ? "page" : undefined}
              className="flex min-h-14 items-center justify-between gap-4 rounded-md px-2 py-2.5 transition-colors hover:bg-rule/40 aria-[current=page]:bg-rule/60"
            >
              <span className="flex flex-col">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  No. {formatPuzzleNumber(entry.number)}
                </span>
                <time dateTime={entry.date} className="font-display text-lg leading-tight">
                  {formatLongDate(entry.date)}
                </time>
              </span>
              <ArchiveStatus entry={entry} />
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ArchiveStatus({ entry }: { entry: ArchiveEntry }) {
  if (entry.progress === "complete" && entry.points !== null) {
    return (
      <span className="font-display text-2xl leading-none">
        <span className="sr-only">Scored </span>
        {formatPoints(entry.points)}
        <span className="text-base text-muted">
          <span aria-hidden="true">/</span>
          <span className="sr-only"> out of </span>
          {ROUND_COUNT}
        </span>
      </span>
    );
  }
  return (
    <span
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
        entry.progress === "in-progress" ? "border border-ink text-ink" : "bg-ink text-paper"
      }`}
    >
      {entry.progress === "in-progress" ? "Resume" : "Play"}
    </span>
  );
}
