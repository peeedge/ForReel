import type { DateKey } from "@/lib/game/dates";
import { LIGHTNING_QUESTION_COUNT } from "@/lib/game/modes";
import { gameRecordSchema, STORAGE_VERSION, storeEnvelopeSchema } from "@/lib/validation/storage";
import type { GameRecord } from "@/types";

export type StoreData = {
  version: typeof STORAGE_VERSION;
  games: Record<DateKey, GameRecord>;
};

export type LoadIssue = "corrupt" | "unsupported-version";

export type LoadResult = {
  store: StoreData;
  issue: LoadIssue | null;
  problems: string[];
};

/**
 * Upgraders keyed by the version they read. Add an entry here when
 * STORAGE_VERSION is bumped so older saves are carried forward.
 */
const MIGRATIONS: Record<number, (games: Record<string, unknown>) => Record<string, unknown>> = {
  1: (games) => Object.fromEntries(Object.entries(games).map(([date, game]) => [date, padLightningResults(game)])),
};

/** Version 1 lightning rounds had five questions; keep the answers given and leave the new ones to be played. */
function padLightningResults(game: unknown): unknown {
  if (typeof game !== "object" || game === null || !("lightning" in game)) return game;
  const lightning = game.lightning;
  if (typeof lightning !== "object" || lightning === null || !("results" in lightning)) return game;
  const results = lightning.results;
  if (!Array.isArray(results) || results.length >= LIGHTNING_QUESTION_COUNT) return game;
  const padded = [...results, ...Array.from({ length: LIGHTNING_QUESTION_COUNT - results.length }, () => null)];
  return { ...game, lightning: { ...lightning, results: padded } };
}

export function emptyStore(): StoreData {
  return { version: STORAGE_VERSION, games: {} };
}

export function parseStore(raw: string | null): LoadResult {
  if (raw === null) return { store: emptyStore(), issue: null, problems: [] };

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch (error) {
    return { store: emptyStore(), issue: "corrupt", problems: [`Saved data is not valid JSON: ${String(error)}`] };
  }

  const envelope = storeEnvelopeSchema.safeParse(json);
  if (!envelope.success) {
    return { store: emptyStore(), issue: "corrupt", problems: [`Saved data has the wrong shape: ${envelope.error.message}`] };
  }

  let { version, games } = envelope.data;
  if (version > STORAGE_VERSION) {
    return {
      store: emptyStore(),
      issue: "unsupported-version",
      problems: [`Saved data is version ${version}; this build understands up to ${STORAGE_VERSION}`],
    };
  }
  while (version < STORAGE_VERSION) {
    const migrate = MIGRATIONS[version];
    if (!migrate) {
      return { store: emptyStore(), issue: "corrupt", problems: [`No migration from storage version ${version}`] };
    }
    games = migrate(games);
    version += 1;
  }

  const problems: string[] = [];
  const valid: Record<DateKey, GameRecord> = {};
  for (const [date, candidate] of Object.entries(games)) {
    const parsed = gameRecordSchema.safeParse(candidate);
    if (!parsed.success) {
      problems.push(`Dropped saved game for ${date}: ${parsed.error.message}`);
    } else if (parsed.data.puzzleDate !== date) {
      problems.push(`Dropped saved game filed under ${date} but dated ${parsed.data.puzzleDate}`);
    } else {
      valid[date] = parsed.data;
    }
  }

  return {
    store: { version: STORAGE_VERSION, games: valid },
    issue: problems.length ? "corrupt" : null,
    problems,
  };
}

export function serializeStore(store: StoreData): string {
  return JSON.stringify(store);
}

/** Saves a game under its own date, never touching other days' records. */
export function upsertGame(store: StoreData, record: GameRecord): StoreData {
  return { ...store, games: { ...store.games, [record.puzzleDate]: record } };
}
