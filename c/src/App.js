import './App.css';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div className="App">
      <CountdownTimer
      countdownTimestampsMs={1643673600000}/>
    </div>
  );
}

export default App;
