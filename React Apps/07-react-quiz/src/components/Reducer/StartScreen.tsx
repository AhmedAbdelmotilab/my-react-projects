export default function StartScreen({
  numOfQuestions,
  onStart,
}: {
  numOfQuestions: number;
  onStart: () => void;
}) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3>{numOfQuestions} Questions To Test Your React Mastery</h3>
      <button className="btn btn-ui" onClick={onStart}>
        Let's Start
      </button>
    </div>
  );
}
