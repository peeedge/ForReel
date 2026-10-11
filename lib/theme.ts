export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "reel-daily-theme";

const DARK_QUERY = "(prefers-color-scheme: dark)";

/**
 * Runs inline in <head> before first paint so the page never flashes the wrong theme.
 * Must stay self-contained: it is serialized as a string and cannot reference imports.
 */
export const THEME_INIT_SCRIPT = `(function(){var t=null;try{t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)})}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia(${JSON.stringify(
  DARK_QUERY,
)}).matches?"dark":"light";document.documentElement.dataset.theme=t})()`;

const listeners = new Set<() => void>();

function readStoredTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia?.(DARK_QUERY).matches ? "dark" : "light";
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  listeners.forEach((listener) => listener());
}

export function getTheme(): Theme {
  const current = document.documentElement.dataset.theme;
  return current === "light" || current === "dark" ? current : (readStoredTheme() ?? systemTheme());
}

export function getServerTheme(): Theme | null {
  return null;
}

export function setTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The choice still applies for this visit.
  }
  applyTheme(theme);
}

export function subscribeToTheme(listener: () => void): () => void {
  listeners.add(listener);
  const media = window.matchMedia?.(DARK_QUERY);
  const onSystemChange = () => {
    if (readStoredTheme() === null) applyTheme(systemTheme());
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === THEME_STORAGE_KEY) applyTheme(readStoredTheme() ?? systemTheme());
  };
  media?.addEventListener("change", onSystemChange);
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    media?.removeEventListener("change", onSystemChange);
    window.removeEventListener("storage", onStorage);
  };
}
