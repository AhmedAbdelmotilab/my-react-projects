import { useQuizQuestionsStore } from "../../store/QuizQuestionsStore";
import ExamInfo from "./ExamInfo";
import FinishedExam from "./FinishedExam";
import Options from "./Options";

export default function Question() {
  const { questions, index, setNextIndex, userAnswer, setUserAnswer, points } =
    useQuizQuestionsStore();

  return index >= 0 && index <= questions.length - 1 ? (
    <div>
      <ExamInfo />
      <h4>{questions[index].question}</h4>
      <Options />
      {userAnswer !== null && (
        <button
          onClick={() => {
            setNextIndex();
            setUserAnswer(null, points);
          }}
          className="btn btn-ui"
        >
          Next Q
        </button>
      )}
    </div>
  ) : (
    <>
      <FinishedExam />
    </>
  );
}
