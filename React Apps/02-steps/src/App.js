import React, { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previous() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function next() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>
              <h3>1</h3>
            </div>
            <div className={`${step >= 2 ? "active" : ""}`}>
              <h3>2</h3>
            </div>
            <div className={`${step >= 3 ? "active" : ""}`}>
              <h3>3</h3>
            </div>
          </div>
          <div className="message">
            <h3>
              Step {step}: {messages[step - 1]}
            </h3>
          </div>
          <div className="buttons">
            <button onClick={previous} style={{ backgroundColor: "#7950f2" }}>
              <span>Previous</span>
            </button>
            <button onClick={next} style={{ backgroundColor: "#7950f2" }}>
              <span>Next</span>
            </button>
          </div>
        </div>
      )}
      <div className="close">
        <button onClick={() => setIsOpen((b) => !b)}>X</button>
      </div>
    </>
  );
}
export default App;
