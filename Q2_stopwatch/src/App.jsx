import { useState, useEffect } from "react";

function Stopwatch() {

  const [time, setTime] = useState(0); 
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [running]);

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  const displayTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(milliseconds).padStart(2, "0");

  return (
    <>
    <div>
      <h1>Stopwatch</h1>
      <h2>{displayTime}</h2>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setRunning(false);
          setTime(0);
        }}
      >Reset</button>
      
    </div>
    </>
  );
}

export default Stopwatch;