import PropTypes from "prop-types"

export default function Streak(props){
    return(
        <div className = "streak">
            <img src = "\fire streak.png" className = "streakImg"></img>
            <h1>Streak: {props.streakLength}</h1>
            <h1>Days Until MCAT: {props.daysUntil}</h1>
        </div>
    );
}