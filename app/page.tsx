import { TodaysGame } from "@/components/game/TodaysGame";
import { getPuzzleSchedule } from "@/lib/puzzles/server";

export default function Home() {
  return <TodaysGame schedule={getPuzzleSchedule()} />;
}
