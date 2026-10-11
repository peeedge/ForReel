import { STORAGE_KEY } from "@/lib/validation/storage";
import { createLocalStorageAdapter, createMemoryAdapter, type StorageAdapter } from "./adapter";
import { parseStore, serializeStore, type LoadIssue, type StoreData } from "./persistence";

export type StorageNotice = LoadIssue | "unavailable" | "write-failed";

export type StoreSnapshot = {
  store: StoreData;
  notice: StorageNotice | null;
  persistent: boolean;
};

type Backend = { adapter: StorageAdapter; persistent: boolean };

let backend: Backend | null = null;
let notice: StorageNotice | null = null;
let cached: { raw: string | null; notice: StorageNotice | null; persistent: boolean; snapshot: StoreSnapshot } | null =
  null;
const listeners = new Set<() => void>();

function getBackend(): Backend {
  if (backend) return backend;
  const local = createLocalStorageAdapter();
  if (local) {
    backend = { adapter: local, persistent: true };
  } else {
    console.warn("Reel Daily: localStorage is unavailable; progress will only last for this visit.");
    backend = { adapter: createMemoryAdapter(), persistent: false };
    notice = "unavailable";
  }
  return backend;
}

function fallBackToMemory(reason: StorageNotice, error: unknown, carry: string | null): Backend {
  console.error(`Reel Daily: switching to in-memory progress (${reason}).`, error);
  backend = {
    adapter: createMemoryAdapter(carry === null ? {} : { [STORAGE_KEY]: carry }),
    persistent: false,
  };
  notice = reason;
  return backend;
}

function readRaw(): string | null {
  const current = getBackend();
  try {
    return current.adapter.read(STORAGE_KEY);
  } catch (error) {
    fallBackToMemory("unavailable", error, null);
    return null;
  }
}

export function getStoreSnapshot(): StoreSnapshot {
  const raw = readRaw();
  const { persistent } = getBackend();
  if (cached && cached.raw === raw && cached.notice === notice && cached.persistent === persistent) {
    return cached.snapshot;
  }
  const parsed = parseStore(raw);
  if (parsed.issue) {
    console.warn("Reel Daily: saved progress could not be fully restored.", parsed.problems);
    notice ??= parsed.issue;
  }
  const snapshot: StoreSnapshot = { store: parsed.store, notice, persistent };
  cached = { raw, notice, persistent, snapshot };
  return snapshot;
}

export function getServerStoreSnapshot(): StoreSnapshot | null {
  return null;
}

export function updateStore(updater: (store: StoreData) => StoreData): void {
  const next = updater(getStoreSnapshot().store);
  const raw = serializeStore(next);
  const current = getBackend();
  try {
    current.adapter.write(STORAGE_KEY, raw);
  } catch (error) {
    fallBackToMemory("write-failed", error, raw);
  }
  listeners.forEach((listener) => listener());
}

export function subscribeToStore(listener: () => void): () => void {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === STORAGE_KEY) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function resetBrowserStoreForTests(): void {
  backend = null;
  notice = null;
  cached = null;
}
