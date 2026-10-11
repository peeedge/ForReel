import type { ButtonHTMLAttributes, Ref } from "react";

type Variant = "primary" | "secondary" | "quiet";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink-soft disabled:bg-rule-strong disabled:text-paper-raised disabled:cursor-not-allowed",
  secondary:
    "border border-ink text-ink hover:bg-ink hover:text-paper disabled:border-rule disabled:text-muted disabled:cursor-not-allowed disabled:hover:bg-transparent",
  quiet: "text-ink underline decoration-rule-strong underline-offset-4 hover:decoration-ink px-1",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  ref?: Ref<HTMLButtonElement>;
};

export function Button({ variant = "primary", className = "", type = "button", ...props }: ButtonProps) {
  const sizing = variant === "quiet" ? "min-h-11" : "min-h-12 px-6";
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-[0.95rem] font-semibold tracking-tight transition-colors ${sizing} ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { label: string };

export function IconButton({ label, className = "", type = "button", ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-rule/60 disabled:cursor-not-allowed disabled:text-rule-strong disabled:hover:bg-transparent ${className}`}
      {...props}
    />
  );
}
