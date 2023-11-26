import React from "react";
import { useTimer } from "use-timer";
import './App.css'

function App() {
  const { time, start, pause, reset, status } = useTimer();

  const formatTime = (time) => {
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2); // Calculate seconds
    const milliseconds = `00${time % 1000}`.slice(-3); // Calculate milliseconds
    return `${seconds}:${milliseconds}`; // Format the time as SS:MMM
  };

  return (
    <div className="stopwatch">
      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="time-display">
        <p>{formatTime(time)}</p>
        {status === "RUNNING" && <p>Running</p>}
      </div>
    </div>
  );
}

export default App;
