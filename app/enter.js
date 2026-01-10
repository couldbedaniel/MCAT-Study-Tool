"use client";

import React, { useState } from "react"

export default function Enter(){
    const [exams, setExams] = useState([]);
    const [examScore, setExamScore] = useState("");
    const [examDate, setExamDate] = useState(new Date());

    function handleScoreChange(event){
        setExamScore(event.target.value);
    }

    function handleDateChange(event){
        setExamDate(event.target.value)
    }

    function addExam(){
        const newExam = {score: examScore, date: examDate};
        
        if(examScore.trim() !== ""){
            setExams(e => [...e, newExam]);
            setExamScore("");
            setExamDate(new Date());
        }
    }

    function deleteExam(index){
        const filteredExams = exams.filter((_, i) => i !== index);
        setExams(t => filteredExams);
    }


    return(
        <>
        <div className = "exams">
            <input type = "number" placeholder = "Enter Score" value = {examScore} onChange = {handleScoreChange}/>
            <input type = "date" value = {examDate} onChange = {handleDateChange}/>
            <button onClick = {addExam}>Add</button>
        </div>
        <ul>
            {exams.map((exam, index) =>
                <li key={index}>
                    <span>{exam.date} {exam.score}</span>
                    <button onClick = {() => deleteExam(index)}>Delete</button>
                </li>
            )}
        </ul>
        </>
    );
}