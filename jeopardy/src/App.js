import './App.css';
import Question from './components/Question';


function App() {

  return (
    <div className="App">
      <h1 className='heading'>Welcome to Jeopardy!</h1>
        <div className='inner'>
          <Question />
        </div>
    </div>
  );
}

export default App;
