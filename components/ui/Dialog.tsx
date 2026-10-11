"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { CloseIcon } from "./Icons";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

/**
 * Native modal <dialog>: the browser handles focus trapping, Escape and
 * inertness of the page behind it. Focus returns to the opener on close.
 */
export function Dialog({ open, onClose, title, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleClose = () => {
    onClose();
    returnFocusRef.current?.focus();
    returnFocusRef.current = null;
  };

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={handleClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) ref.current?.close();
      }}
      className="m-auto max-h-[min(42rem,calc(100dvh-2rem))] w-[min(30rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-rule bg-paper-raised p-0 text-ink shadow-[0_24px_60px_-20px_rgb(28_26_23/0.45)] open:animate-rise"
    >
      <div className="sticky top-0 flex items-center justify-between border-b border-rule bg-paper-raised px-6 py-4">
        <h2 id={titleId} className="font-display text-2xl tracking-tight">
          {title}
        </h2>
        <button
          type="button"
          onClick={() => ref.current?.close()}
          aria-label="Close"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-rule/60"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="px-6 py-5">{open ? children : null}</div>
    </dialog>
  );
}
