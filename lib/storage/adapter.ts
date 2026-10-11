export interface StorageAdapter {
  read(key: string): string | null;
  write(key: string, value: string): void;
  remove(key: string): void;
}

/** Returns null when localStorage is missing or blocked (private modes, disabled cookies, sandboxed frames). */
export function createLocalStorageAdapter(): StorageAdapter | null {
  try {
    const storage = window.localStorage;
    const probe = "__reel_daily_probe__";
    storage.setItem(probe, probe);
    storage.removeItem(probe);
    return {
      read: (key) => storage.getItem(key),
      write: (key, value) => storage.setItem(key, value),
      remove: (key) => storage.removeItem(key),
    };
  } catch {
    return null;
  }
}

export function createMemoryAdapter(initial: Record<string, string> = {}): StorageAdapter {
  const data = new Map(Object.entries(initial));
  return {
    read: (key) => data.get(key) ?? null,
    write: (key, value) => void data.set(key, value),
    remove: (key) => void data.delete(key),
  };
}
