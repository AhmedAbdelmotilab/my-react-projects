import { useQuizQuestionsStore } from "../../store/QuizQuestionsStore";

export default function Options() {
  const { questions, index, userAnswer, setUserAnswer } =
    useQuizQuestionsStore();
  const hasAnswered = userAnswer !== null;
  return (
    <div className="options">
      {questions[index].options.map((option, i) => (
        <button
          className={`btn btn-option ${i === userAnswer ? "answer" : ""} ${hasAnswered ? (i === questions[index].correctOption ? "correct" : "wrong") : ""}`}
          key={option}
          onClick={() => setUserAnswer(i, questions[index].points)}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
