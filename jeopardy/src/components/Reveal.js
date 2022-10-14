import React, { useState } from 'react';

export default function Reveal ({ question }) {
// question is a props passed down from question.js

    let qstn = question[0]
    //data from api is question object

    //state to hold question data
    //pass false to start hidden
    const [reveal, setReveal] = useState(false)
    const [buttonText, setButtonText] = useState ('Click to Reveal Answer')
    
    //function to reveal question
    const revealAnswer = () => {
        //toggle reveal state
        setReveal(reveal => !reveal)
        //toggle button text
        setButtonText((state) => (state === 'Click to Hide Answer' ? 'Click to Reveal Answer' : 'Click to Hide Answer'))
    }

    //use loaded/loading make sure react has question data first before trying to render
    const loaded = () => {
        return ( 
            <div>
                {/* use && to conditionally render based on state variable */}
                <button onClick={revealAnswer}>{buttonText}</button>
                {reveal && (
                    <div>
                        <h3>Answer: {qstn.answer}</h3>
                    </div>
                )}
                
            </div>
        );
    } 

    const loading = () => {
     
            <div>
                
            </div>
    }
    return question ? loaded() : loading()
}
    