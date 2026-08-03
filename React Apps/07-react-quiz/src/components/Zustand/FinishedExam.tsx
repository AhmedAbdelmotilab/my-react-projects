import { useQuizQuestionsStore } from "../../store/QuizQuestionsStore";

export default function FinishedExam() {
  const { points, setResetExam } = useQuizQuestionsStore();

  return (
    <>
      <div className="finished">
        <h2>Quiz Finished!</h2>
        <p>
          You scored <strong>{points}</strong> point{points === 1 ? "" : "s"}.
        </p>
      </div>
      <button onClick={setResetExam} className="btn btn-ui">
        Reset Quiz
      </button>{" "}
    </>
  );
}
