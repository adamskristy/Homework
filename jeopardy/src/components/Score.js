import React, { useState } from 'react';

export default function Score ({ question }){
// question is a props passed down from question.js

//data from api is question object
let qstn = question[0]

//state to hold score data
let [score, setScore] = useState(0)

//function to change score state
const increaseScore = (e) => {
    setScore(score + qstn.value)
    //prevent refresh of page
    e.preventDefault()
}


const decreaseScore = (e) => {
    setScore(score - qstn.value)
    e.preventDefault()
}

const resetScore = (e) => {
    setScore(score - score)
    e.preventDefault()
}


    return(
        <div>
            <h1 className='score'>Score: {score}</h1>
            <form>
                <button className='decrease' onClick={decreaseScore}>Decrease</button>
                <button className='increase' onClick={increaseScore}>Increase</button>
                <button onClick={resetScore}>Reset</button>
            </form>
        </div>
    )
}