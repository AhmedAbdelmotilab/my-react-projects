import { useQuizQuestionsStore } from "../../store/QuizQuestionsStore";

export default function StartScreen() {
  const { questions, setStatus } = useQuizQuestionsStore();
  const numOfQuestions = questions.length;
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{numOfQuestions} Questions To Test Your React Mastery</h3>
      <button className="btn btn-ui" onClick={() => setStatus("Start")}>
        Let's Start
      </button>
    </div>
  );
}
