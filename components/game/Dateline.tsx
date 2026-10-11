import { formatLongDate } from "@/lib/game/dates";
import { formatPuzzleNumber } from "@/lib/game/schedule";

export function Dateline({ date, number }: { date: string; number: number }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-rule py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">
      <p>
        <time dateTime={date}>{formatLongDate(date)}</time>
      </p>
      <p>
        <span className="sr-only">Puzzle number </span>
        <span aria-hidden="true">No. </span>
        {formatPuzzleNumber(number)}
      </p>
    </div>
  );
}
