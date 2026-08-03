import { useEffect } from "react";
import { useQuizQuestionsStore } from "../../store/QuizQuestionsStore";
import Header from "./Header";
import Main from "./Main";

function App() {
  const { setQuestions, setStatus } = useQuizQuestionsStore();
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:8000/questions`, {
          signal: controller.signal,
        });
        const data = await res.json();
        console.log(data);
        setQuestions(data);
        setStatus("Done");
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          console.log("Abort The Fetching");
          return;
        }
        setStatus("Error");
        console.error(error);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [setQuestions, setStatus]);

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}
export default App;
