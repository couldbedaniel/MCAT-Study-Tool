import Header from "./header.js";
import Scores from "./scores.js";
import Streak from "./streak.js";

export default function Home() {
  const scoresValsExample = [506, 509, 510, 513, 517, 515]
  
  return (
    <div className = "boards">
      <Streak streakLength = "5" daysUntil = "50"></Streak>
      <Scores items = {scoresValsExample}></Scores>
    </div>
  );
}
