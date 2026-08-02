import type { ChangeEvent } from "react";
import { useDateCounter } from "../store/DateCounterStore";

function DateCounterZustand() {
  const { count, setCount, step, setStep, setRest, setInc, setDec } =
    useDateCounter();

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    setDec();
  };

  const inc = function () {
    setInc();
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    setCount(Number(e.target.value));
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    setRest();
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounterZustand;
