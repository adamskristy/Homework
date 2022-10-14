import React, { useState, useEffect } from 'react';

export default function Reveal ({ question }) {
// question is a props passed down from question.js

    let qstn = question[0]
    //data from api is question object

    //state to hold question data
    //pass false to start hidden
    const [reveal, setReveal] = useState(false)
    
    //function to reveal question
    const revealAnswer = () => {
        //toggle reveal state
        setReveal(reveal => !reveal)
    }
    
    // useEffect(() => {
    //     //will hide answer when question data changes
    //     revealAnswer()
    // },[question])


    //use loaded/loading make sure react has question data first before trying to render
    
        return ( 
            <div>
                {/* use && to conditionally render based on state variable */}
                <button onClick={revealAnswer}>Click to Reveal Answer</button>
                {reveal && (
                    <div>
                        <h3>Answer:</h3>
                        <h3>{qstn.answer}</h3>
                    </div>
                )}
                
            </div>
        );
    } 
    