import type { RestoreIssue } from "@/lib/game/engine";
import type { StorageNotice as StorageNoticeKind } from "@/lib/storage/browserStore";

const MESSAGES: Record<StorageNoticeKind | RestoreIssue, string> = {
  corrupt: "Some saved progress in this browser couldn't be read, so it was reset. You can keep playing as normal.",
  "unsupported-version":
    "Your saved progress came from a newer version of Box Score and couldn't be loaded here. Today's game starts fresh.",
  unavailable: "This browser isn't allowing saved progress. You can still play, but results won't be kept after you leave.",
  "write-failed": "Your latest progress couldn't be saved in this browser. It will last until you close this page.",
  mismatch: "Today's puzzle was updated after you started, so your progress on it was reset.",
  invalid: "Part of your saved progress for today didn't match the puzzle, so you're picking up from the last valid round.",
};

export function StorageNotice({ kind }: { kind: StorageNoticeKind | RestoreIssue }) {
  return (
    <p role="status" className="mt-4 rounded-md border border-partial/40 bg-partial-soft px-4 py-3 text-sm text-ink">
      {MESSAGES[kind]}
    </p>
  );
}
