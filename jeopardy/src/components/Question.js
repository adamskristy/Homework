import React, { useState} from 'react';
import Info from './Info';
import Reveal from './Reveal';

export default function Question (){


    //state to hold question data
    //initial value, function to change value = useState(what is being passed as initial value, ex. empty string)
    let [question, setQuestion] = useState('')

    //function to get questions
    const getQuestion = async () => {
        //make fetch request and store response
        const response = await fetch(`http://jservice.io/api/random`)
        const data = await response.json()
        setQuestion(data)
        //console.log(data)
    }


    // useEffect(() => {
    //     //this function will run when [] changes, since empty
    //     getQuestion()
    // },[])

    return(
        <div>
            <h1>Let's Play</h1>
            {/* when button clicked, function will run */}
            <button onClick={getQuestion}>Get Question</button>
            {/* pass question as props to Info, o able to use in Info */}
            <Info question={question} />
            <Reveal question={question} />
        </div>
    )
}