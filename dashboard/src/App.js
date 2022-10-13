import './App.css';
import SentimentAnalysis from './components/SentimentAnalysis';
import Sidebar from './components/Sidebar';
import AverageRating from './components/AverageRating';
import Reviews from './components/Reviews';
import WebsiteVisitors from './components/WebsiteVisitors';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
