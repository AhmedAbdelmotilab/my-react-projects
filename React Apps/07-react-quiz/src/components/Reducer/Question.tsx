interface Question {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}
interface QuestionProps {
  question: Question;
}
export default function Question({ question }: QuestionProps) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option) => (
          <button key={option} className="btn btn-option">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
