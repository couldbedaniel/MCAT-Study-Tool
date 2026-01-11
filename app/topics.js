"use client";
import React, { useState } from "react";
import StarSet from "./starset.js";

export default function Topics(props){
    const topicList = props.list;

    return(
        <>
        <div className = "topics">
            <h2 className = "topic-header">{props.title}</h2>
            <ol>
                <li className = "topic-item">
                    <span className = "topic-name-header">Topic:</span>
                    <span className = "topic-yield">Yield:</span>
                </li>
                {topicList.map((item, index) => 
                <li key = {index} className = "topic-item">
                    <span className = "topic-name">{item.topic}</span>
                    <span className = "topic-star"><StarSet number = {item.weight}/></span>
                </li>)}
            </ol>
        </div>
        </>
    );
}