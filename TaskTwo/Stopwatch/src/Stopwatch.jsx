import { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const handleLap = () => {
    setLapTimes((prevLapTimes) => [...prevLapTimes, time]);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setLapTimes([]);
  };

  return (
    <div className="stopwatch">
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={handleToggle}>{isRunning ? 'Pause' : 'Play'}</button>
        <button onClick={handleLap}>Lap</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <ul className="lap-times">
        {lapTimes.map((lapTime, index) => (
          <li key={index}>{formatTime(lapTime)}</li>
        ))}
      </ul>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

export default Stopwatch;
