"use client";

import { useEffect, useEffectEvent, useState, useSyncExternalStore } from "react";
import {
  getServerStoreSnapshot,
  getStoreSnapshot,
  subscribeToStore,
  type StoreSnapshot,
} from "@/lib/storage/browserStore";

/** Saved progress, or null during server rendering and hydration. */
export function useGameStore(): StoreSnapshot | null {
  return useSyncExternalStore(subscribeToStore, getStoreSnapshot, getServerStoreSnapshot);
}

function subscribeToClock(onTick: () => void): () => void {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}

const currentSecond = () => Math.floor(Date.now() / 1000);
const noTimeOnServer = () => null;

/** Wall-clock seconds, or null until hydrated so server and client markup match. */
export function useNowSeconds(): number | null {
  return useSyncExternalStore(subscribeToClock, currentSecond, noTimeOnServer);
}

/**
 * Milliseconds left until `deadlineMs`, refreshed every frame, or null before the first frame.
 * `onExpire` fires once when it reaches zero, including immediately if the deadline has already passed.
 */
export function useRemainingMs(deadlineMs: number, onExpire: () => void): number | null {
  const [tick, setTick] = useState<{ deadlineMs: number; remaining: number } | null>(null);
  const expire = useEffectEvent(onExpire);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const remaining = Math.max(0, deadlineMs - Date.now());
      setTick({ deadlineMs, remaining });
      if (remaining > 0) frame = window.requestAnimationFrame(update);
      else expire();
    };
    frame = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frame);
  }, [deadlineMs]);

  return tick?.deadlineMs === deadlineMs ? tick.remaining : null;
}
