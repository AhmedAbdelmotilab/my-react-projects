import React, { useState } from "react";
import "./style.css";
function App() {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function increaseCount() {
    for (let index = 0; index < step; index++) {
      setDate((d) => new Date(d.getTime() + 24 * 60 * 60 * 1000));
      setCount((c) => c + 1);
    }
  }
  function decreaseCount() {
    for (let index = 0; index < step; index++) {
      setDate((d) => new Date(d.getTime() - 24 * 60 * 60 * 1000));
      setCount((c) => c - 1);
    }
  }
  function increaseStep() {
    setStep((c) => c + 1);
  }
  function decreaseStep() {
    if (step > 1) {
      setStep((c) => c - 1);
    }
  }
  return (
    <div className="container">
      <div className="display">
        <div className="counter">
          <button onClick={decreaseStep} className="btn btn-red">
            -
          </button>
          <h3>Step : {step}</h3>
          <button onClick={increaseStep} className="btn btn-green">
            +
          </button>
        </div>
      </div>
      <div className="display">
        <div className="counter">
          <button onClick={decreaseCount} className="btn btn-red">
            -
          </button>
          <h3>Count : {count}</h3>
          <button onClick={increaseCount} className="btn btn-green">
            +
          </button>
        </div>
      </div>
      <div className="display">
        <h3>
          Week Day{" "}
          <span style={{ color: "green" }}>{weekDays[date.getDay()]}</span> Date
          : {""}
          {date.toDateString()}
        </h3>
      </div>
    </div>
  );
}
export default App;
