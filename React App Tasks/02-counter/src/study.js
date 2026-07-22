import React, { useState } from "react";
import "./style.css";
function App() {
  const [date, setDate] = useState(new Date());
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function stepPlus() {
    setStep((s) => s + 1);
  }
  function stepMins() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function countPlus() {
    for (let index = 0; index < step; index++) {
      setDate((d) => new Date(d.getTime() + 24 * 60 * 60 * 1000));
      setCount((c) => c + 1);
    }
  }
  function countMins() {
    for (let index = 0; index < step; index++) {
      setDate((d) => new Date(d.getTime() - 24 * 60 * 60 * 1000));
      setCount((c) => c - 1);
    }
  }
  return (
    <div className="container">
      <div className="counter">
        <button onClick={stepMins} className="btn btn-red">
          -
        </button>
        <div className="display">
          <h3>Step:{step}</h3>
        </div>
        <button onClick={stepPlus} className="btn btn-green">
          +
        </button>
      </div>
      <div className="counter">
        <button onClick={countMins} className="btn btn-red">
          -
        </button>
        <div className="display">
          <h3>Count:{count}</h3>
        </div>
        <button onClick={countPlus} className="btn btn-green">
          +
        </button>
      </div>
      <div className="counter">
        <div className="display">
          <p>
            {weekday[date.getDay()]} Date : {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
