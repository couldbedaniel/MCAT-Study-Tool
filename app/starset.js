"use client";
import React, { useState } from "react";

export default function StarSet(props){
    const imgWidth = 20;
    const numStars = props.number;

    function outputStarImage(index){
        if(index <= numStars){
            return "star-filled.png"
        }
        return "star-outline.png"
    }

    return(
        <>
        <img src = {outputStarImage(1)} width = {imgWidth}></img>
        <img src = {outputStarImage(2)} width = {imgWidth}></img>
        <img src = {outputStarImage(3)} width = {imgWidth}></img>
        <img src = {outputStarImage(4)} width = {imgWidth}></img>
        <img src = {outputStarImage(5)} width = {imgWidth}></img>
        </>
    );    
}

