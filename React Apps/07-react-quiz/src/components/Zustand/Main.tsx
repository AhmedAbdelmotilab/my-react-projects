import { useQuizQuestionsStore } from "../../store/QuizQuestionsStore";
import Error from "./Error";
import Loader from "./Loader";
import Question from "./Question";
import StartScreen from "./StartScreen";

export default function Main() {
  const { status } = useQuizQuestionsStore();
  return (
    <main className="main">
      {status === "Loading" && <Loader />}
      {status === "Error" && <Error />}
      {status === "Done" && <StartScreen />}
      {status === "Start" && (
        <>
          <Question />
        </>
      )}
    </main>
  );
}
