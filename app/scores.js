export default function Scores(props) {
    return (
        <div className = "scores">
            <img src = "\graphexample.png" className = "eximg"></img>
            <div className = "sc-under">
                <div className = "sc-pair">
                    <h3 className = "sc-title">Best Score:</h3>
                    <h1 className = "sc-num">{props.maxScore}</h1>
                </div>
                <div className = "sc-pair">
                    <h3 className = "sc-title">Improvement:</h3>
                    <h1 className = "sc-num">8</h1>
                </div>
                <div className = "sc-pair"> 
                    <h3 className = "sc-title">Most Recent Score:</h3>
                    <h1 className = "sc-num">518</h1>
                </div>
            </div>
        </div>
    )
}