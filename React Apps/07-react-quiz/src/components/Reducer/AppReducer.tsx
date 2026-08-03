import { useEffect, useReducer } from "react";
import ErrorC from "./Error";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import Question from "./Question";
import StartScreen from "./StartScreen";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

interface State {
  questions: Question[];
  status: string;
  index: number;
}

const initialValues: State = { questions: [], status: "Loading", index: 0 };

type Action =
  | { type: "AddQuestions"; payload: Question[] }
  | { type: "Error" }
  | { type: "Start" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "AddQuestions":
      return { ...state, questions: action.payload, status: "Ready" };
    case "Error":
      return { ...state, status: "Error" };
    case "Start":
      return { ...state, status: "Active" };
    default:
      console.log("No Actions Founded");
      return state;
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialValues,
  );
  const numOfQuestions = questions.length;
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:8000/questions`, {
          signal: controller.signal,
        });
        const data = await res.json();
        console.log(data);
        dispatch({ type: "AddQuestions", payload: data });
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          console.log("Abort The Fetching");
          return;
        }
        dispatch({ type: "Error" });
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "Loading" && <Loader />}
        {status === "Ready" && (
          <StartScreen
            numOfQuestions={numOfQuestions}
            onStart={() => dispatch({ type: "Start" })}
          />
        )}
        {status === "Error" && <ErrorC />}
        {status === "Active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}
export default App;
