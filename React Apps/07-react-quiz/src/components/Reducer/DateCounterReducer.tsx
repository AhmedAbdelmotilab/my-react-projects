import { useReducer, type ChangeEvent } from "react";

interface State {
  count: number;
  step: number;
}
const initialValues: State = { count: 0, step: 1 };
type Action =
  | { type: "Dec" }
  | { type: "Inc" }
  | { type: "Set-Count"; payload: number }
  | { type: "Set-Step"; payload: number }
  | { type: "Reset" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "Dec":
      return { ...state, count: state.count - state.step };
    case "Inc":
      return { ...state, count: state.count + state.step };
    case "Set-Count":
      return { ...state, count: action.payload };
    case "Set-Step":
      return { ...state, step: action.payload };
    case "Reset":
      return initialValues;
    default:
      throw new Error("No Action Founded");
  }
}

function DateCounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    dispatch({ type: "Dec" });
  };

  const inc = function () {
    dispatch({ type: "Inc" });
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "Set-Count", payload: Number(e.target.value) });
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "Set-Step", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "Reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounterReducer;
