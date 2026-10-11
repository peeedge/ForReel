import { formatPoints } from "@/lib/game/scoring";
import type { Stats } from "@/lib/game/stats";

export function StatsPanel({ stats }: { stats: Stats | null }) {
  if (!stats) return <p className="text-ink-soft">Loading your statistics…</p>;

  const completionRate = stats.played ? Math.round((stats.completed / stats.played) * 100) : 0;
  const items: [string, string | number][] = [
    ["Played", stats.played],
    ["Completed", stats.completed],
    ["Finish rate", `${completionRate}%`],
    ["Current streak", stats.currentStreak],
    ["Best streak", stats.bestStreak],
    ["Perfect games", stats.perfectGames],
    ["Correct answers", stats.totalCorrect],
    ["Average score", stats.averageScore === null ? "—" : formatPoints(stats.averageScore)],
  ];
  const maxBucket = Math.max(1, ...stats.distribution);

  return (
    <div className="space-y-7">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
        {items.map(([label, value]) => (
          <div key={label} className="flex flex-col-reverse gap-1">
            <dt className="text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.12em] text-muted">{label}</dt>
            <dd className="font-display text-3xl leading-none">{value}</dd>
          </div>
        ))}
      </dl>

      <div>
        <h3 className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted">Score distribution</h3>
        <ol className="space-y-1.5">
          {stats.distribution
            .map((count, score) => ({ count, score }))
            .reverse()
            .map(({ count, score }) => (
              <li key={score} className="flex items-center gap-3 text-sm">
                <span className="w-4 text-right font-semibold tabular-nums">{score}</span>
                <span className="h-6 flex-1">
                  <span
                    className={`flex h-full min-w-7 items-center justify-end rounded-sm px-2 text-xs font-semibold tabular-nums ${
                      count ? "bg-ink text-paper" : "bg-rule/60 text-ink-soft"
                    }`}
                    style={{ width: `${(count / maxBucket) * 100}%` }}
                  >
                    {count}
                  </span>
                </span>
                <span className="sr-only">
                  {count} {count === 1 ? "game" : "games"} with a score of {score}
                </span>
              </li>
            ))}
        </ol>
        <p className="mt-2 text-xs text-muted">Half points are rounded down in this chart.</p>
      </div>

      <p className="border-t border-rule pt-4 text-sm leading-relaxed text-ink-soft">
        <strong className="font-semibold text-ink">How streaks work:</strong> your streak counts consecutive days (in UTC) on
        which you finished all five rounds, whatever your score. If you skip a day, your current streak goes back to zero. Today
        doesn&apos;t count against you until it ends. Puzzles finished later from the archive don&apos;t extend a streak. Stats are kept
        in this browser only.
      </p>
    </div>
  );
}
