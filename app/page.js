import Header from "./header.js";
import Scores from "./scores.js";
import Streak from "./streak.js";

export default function Home() {
  return (
     <div className = "boards">
     <Scores maxScore = "520"></Scores>
     <Scores maxScore = "518"></Scores>
     <Streak streakLength = "5"></Streak>
     </div>
  );
}
