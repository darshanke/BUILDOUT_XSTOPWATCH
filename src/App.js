import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); // Time in seconds
  const [name, setName] = useState("Start");

  const handleClick = () => {
    setIsRunning(!isRunning);
    setName(isRunning ? "Start" : "Stop");
  };

  const handleReset = () => {
    setIsRunning(false);
    setName("Start");
    setTime(0);
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);


  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div className="App">
      <h1>StopWatch</h1>
      <h4>
        Time: <span>{formatTime(time)}</span>
      </h4>
      <button onClick={handleClick}>{name}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
