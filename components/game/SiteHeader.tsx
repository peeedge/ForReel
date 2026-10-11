import type { ReactNode } from "react";
import { ReelMark } from "@/components/ui/Icons";

export function SiteHeader({ actions }: { actions?: ReactNode }) {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex h-16 w-full max-w-[42rem] items-center justify-between px-5">
        <h1 className="flex items-center gap-2.5">
          <ReelMark className="h-7 w-7 text-accent" />
          <span className="font-display text-[1.65rem] leading-none tracking-tight">
            Reel <em className="font-normal italic">Daily</em>
          </span>
        </h1>
        {actions ? <div className="-mr-2 flex items-center">{actions}</div> : null}
      </div>
    </header>
  );
}
