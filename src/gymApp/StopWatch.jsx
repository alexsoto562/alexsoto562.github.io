import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 100);
        if (milliseconds >= 1000) {
          setSeconds((prevSeconds) => prevSeconds + 1);
          setMilliseconds(0);
        }
        if (seconds >= 60) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          setSeconds(0);
        }
      }, 100);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running, seconds, milliseconds]);

  const startStopwatch = () => {
    setRunning(true);
  };

  const stopStopwatch = () => {
    setRunning(false);
  };

  const resetStopwatch = () => {
    setRunning(false);
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
  };

  return (
    <div>
      <div>
        <h3>Stopwatch:</h3>
        <p>
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(3, "0")}
        </p>
      </div>
      <div className="text-center">
        <Button variant="success" onClick={startStopwatch}>
          Start Stopwatch
        </Button>
        <Button variant="warning" onClick={stopStopwatch}>
          Stop Stopwatch
        </Button>
        <Button variant="danger" onClick={resetStopwatch}>
          Reset Stopwatch
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;
