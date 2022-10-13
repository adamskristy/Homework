import { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Reveal from './components/Reveal';
import Score from './components/Score';

function App() {

  //state to hold jeopardy data
  let [question, setQuestion] = useState({})

  //function to get questions
  // async /await

  const getQuestion = async () => {
    //make fetch request and format to json
    const response = await fetch(`https://jservice.io/api/random`)
    const data = await response.json()
    setQuestion(data)
  }

  
  return (
    <div className="App">
      <Score />
      <Question getQuestion={getQuestion} />
      <Reveal />
    
    </div>
  );
}

export default App;
