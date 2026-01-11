import Header from "./header.js";
import Scores from "./scores.js";
import Streak from "./streak.js";
import Enter from "./enter.js";
import Topics from "./topics.js";
import StarSet from "./starset.js"

export default function Home() {
  const scoresValsExample = [506, 509, 510, 513, 517, 515]
  
  return (
    <>
    <Streak streakLength = "5" daysUntil = "50"/>
    <div className = "big">  
      <div className = "boards">  
        <Scores items = {scoresValsExample}/>
        <Enter/>
      </div>
      <div>
        <Topics/>
        <StarSet/>
      </div>
    </div>
    </>
  );
}
