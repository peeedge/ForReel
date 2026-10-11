"use client";

import { useSyncExternalStore } from "react";
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
