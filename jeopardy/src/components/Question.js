import React, { useState, useEffect } from 'react';

export default function Question (props){

    let { question } = props

    console.log(question[0].value)

    const handleChange = (e) => {
        set
    }

    return(
        <div>
            <h1>Let's Play</h1>
            <button onClick={handleClick}>Get Question</button>
            <h2>Category: {question[0].category.title}</h2>
            <h3>Points: </h3>
            <h3>Answer: </h3>
        </div>
    )
}