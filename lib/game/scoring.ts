import type { Answer, Outcome, Points, Question, RoundResult, TimelineQuestion } from "@/types";

export type Evaluation = {
  outcome: Outcome;
  points: Points;
  correctPositions?: number;
  totalPositions?: number;
};

/**
 * Timeline rule: a perfect order earns 1 point; having at least half of the
 * films in their correct positions earns half a point; anything less earns 0.
 */
export function scoreTimelineOrder(submitted: readonly string[], correct: readonly string[]): Evaluation {
  const totalPositions = correct.length;
  const correctPositions = submitted.reduce((count, id, index) => count + (id === correct[index] ? 1 : 0), 0);
  if (correctPositions === totalPositions) {
    return { outcome: "correct", points: 1, correctPositions, totalPositions };
  }
  if (correctPositions * 2 >= totalPositions) {
    return { outcome: "partial", points: 0.5, correctPositions, totalPositions };
  }
  return { outcome: "incorrect", points: 0, correctPositions, totalPositions };
}

export function isValidTimelineOrder(question: TimelineQuestion, order: readonly string[]): boolean {
  const ids = question.movies.map((movie) => movie.id);
  return order.length === ids.length && new Set(order).size === order.length && order.every((id) => ids.includes(id));
}

/** Returns null when the answer is malformed for this question. */
export function evaluateAnswer(question: Question, answer: Answer): Evaluation | null {
  if (question.kind === "multiple-choice") {
    if (answer.kind !== "multiple-choice") return null;
    if (!question.options.some((option) => option.id === answer.optionId)) return null;
    return answer.optionId === question.correctOptionId
      ? { outcome: "correct", points: 1 }
      : { outcome: "incorrect", points: 0 };
  }
  if (answer.kind !== "timeline" || !isValidTimelineOrder(question, answer.order)) return null;
  return scoreTimelineOrder(answer.order, question.correctOrder);
}

export function totalPoints(results: readonly (RoundResult | null)[]): number {
  return results.reduce((sum, result) => sum + (result?.points ?? 0), 0);
}

export function formatPoints(points: number): string {
  return Number.isInteger(points) ? String(points) : points.toFixed(1);
}
