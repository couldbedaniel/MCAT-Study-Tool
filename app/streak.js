import PropTypes from "prop-types"

export default function Streak(props){
    return(
        <div className = "streak">
            <h1>You're Doing Amazing! Keep Pushing!</h1>
            <h1>Streak: {props.streakLength}</h1>
            <img src = "\fire streak.png" className = "streakImg"></img>
            <h1>Days Until MCAT: {props.daysUntil}</h1>
        </div>
    );
}