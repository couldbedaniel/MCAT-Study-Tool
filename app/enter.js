"use client";
import React, { useState } from "react"

export default function Enter(){
    const [exams, setExams] = useState([]);
    const [examScore, setExamScore] = useState("");
    const [examDate, setExamDate] = useState("");

    function handleScoreChange(event){
        setExamScore(event.target.value);
    }

    function handleDateChange(event){
        setExamDate(event.target.value)
    }

    function addExam(){
        const newExam = {score: examScore, date: examDate};
        const today = new Date();
        const examDateObj = new Date(examDate);


        if(examScore.trim() !== "" && examDateObj <= today){
            setExams(e => [...e, newExam]);
            setExamScore("");
            setExamDate("");
        }
    }

    function deleteExam(index){
        const filteredExams = exams.filter((_, i) => i !== index);
        setExams(t => filteredExams);
    }

    function getOrdinal(day) {
        if (day >= 11 && day <= 13) return "th";
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
  }
}
    
    function formatDateWithOrdinal(date) {
        const day = date.getDate();
        const suffix = getOrdinal(day);

        const formatted = new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
        }).format(date);

        return formatted.replace(day, `${day}${suffix}`);
    }


    return(
        <div className = "exam-set">
            <h2 className = "exam-header">Enter Practice Exams:</h2>
        <div className = "exam-input">
            <input className = "score-input" type = "number" placeholder = "Enter Score" value = {examScore} onChange = {handleScoreChange}/>
            <input className = "date-input" type = "date" value = {examDate} onChange = {handleDateChange}/>
            <button className = "add-button" onClick = {addExam}>Add</button>
        </div>
        <ol className = "exam-list">
            {exams.map((exam, index) =>
                <li key={index} className = "exam-item">
                    <span>Scored <span>{exam.score}</span> on <span>{formatDateWithOrdinal(new Date(exam.date))}</span></span>
                    <button className = "delete-button" onClick = {() => deleteExam(index)}>Delete</button>
                </li>
            )}
        </ol>
        </div>
    );
}