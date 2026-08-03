import { useQuizQuestionsStore } from "../../store/QuizQuestionsStore";

export default function ExamInfo() {
  const { index, questions, points, userAnswer } = useQuizQuestionsStore();
  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0,
  );
  return (
    <header className="progress">
      <progress
        max={numOfQuestions}
        value={index + Number(userAnswer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> /{numOfQuestions}
      </p>
      <p>
        Points: <strong>{points}</strong> /{maxPossiblePoints}
      </p>
    </header>
  );
}
