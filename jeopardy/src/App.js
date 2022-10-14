import './App.css';
import Question from './components/Question';
import Score from './components/Score';

function App() {

  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Score />
      <Question />
    </div>
  );
}

export default App;
