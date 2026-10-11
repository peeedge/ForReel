import type { ComponentType, SVGProps } from "react";
import { CheckIcon, CrossIcon, HalfIcon } from "@/components/ui/Icons";
import type { Outcome } from "@/types";

type OutcomeStyle = {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  border: string;
  soft: string;
  solid: string;
};

export const OUTCOME_STYLES: Record<Outcome, OutcomeStyle> = {
  correct: {
    label: "Correct",
    Icon: CheckIcon,
    text: "text-correct",
    border: "border-correct",
    soft: "bg-correct-soft",
    solid: "bg-correct text-paper",
  },
  partial: {
    label: "Half credit",
    Icon: HalfIcon,
    text: "text-partial",
    border: "border-partial",
    soft: "bg-partial-soft",
    solid: "bg-partial text-paper",
  },
  incorrect: {
    label: "Incorrect",
    Icon: CrossIcon,
    text: "text-incorrect",
    border: "border-incorrect",
    soft: "bg-incorrect-soft",
    solid: "bg-incorrect text-paper",
  },
};
