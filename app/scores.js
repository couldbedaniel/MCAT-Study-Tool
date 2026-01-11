import Enter from "./enter.js";

export default function Scores(props) {
    const scoreVals = props.items;
    var maxScore = Math.max(...scoreVals);
    var improve = Math.max(0, maxScore - scoreVals[0]);


    return (
        <>
        <div className = "scores">
            <img src = "\graphexample.png" className = "eximg"></img>
            <div className = "sc-under">
                <div className = "sc-pair">
                    <h3 className = "sc-title">Best Score:</h3>
                    <h1 className = "sc-num">{maxScore}</h1>
                </div>
                <div className = "sc-pair">
                    <h3 className = "sc-title">Improvement:</h3>
                    <h1 className = "sc-num">{improve}</h1>
                </div>
                <div className = "sc-pair"> 
                    <h3 className = "sc-title">Most Recent Score:</h3>
                    <h1 className = "sc-num">{scoreVals[scoreVals.length - 1]}</h1>
                </div>
            </div>
        </div>
        <div>
            <Enter/>
        </div>
        </>
    )
}