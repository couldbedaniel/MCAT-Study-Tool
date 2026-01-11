import Scores from "./scores.js";
import Streak from "./streak.js";
import Enter from "./enter.js";
import Topics from "./topics.js";
import StarSet from "./starset.js"
import {genChem, oChem, bioChem, biology, physMath, behaveSci} from "../data/topicsdata.js"

export default function Home() {
  const scoresValsExample = [506, 509, 510, 513, 517, 515];
  
  return (
    <>
    <Streak streakLength = "5" daysUntil = "50"/>
    <div className = "big">  
      <div className = "boards">  
        <Scores items = {scoresValsExample}/>
        <Enter/>
      </div>
      <div>
        <Topics list = {genChem} title = "General Chemistry" color = "lightgreen"/>
        <Topics list = {oChem} title = "Organic Chemistry" color = "green"/>
        <Topics list = {biology} title = "Biology" color = "blue"/>
      </div>
      <div>
        <Topics list = {bioChem} title = "Biochemistry" color = "lightyellow"/>
        <Topics list = {physMath} title = "Physics/Math" color = "lightcoral"/>
        <Topics list = {behaveSci} title = "Behavioral Sciences" color = "orange"/>
      </div>
    </div>
    </>
  );
}
