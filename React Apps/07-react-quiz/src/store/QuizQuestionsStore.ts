import { create } from "zustand";
import { devtools } from "zustand/middleware";
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}
export interface QuizQuestionsStore {
  questions: Question[];
  status: string;
  index: number;
  userAnswer: number | null;
  points: number;
  setResetExam: () => void;
  setQuestions: (questions: Question[]) => void;
  setStatus: (status: string) => void;
  setNextIndex: () => void;
  setUserAnswer: (answerIndex: number | null, questionPoints: number) => void;
}

export const useQuizQuestionsStore = create(
  devtools<QuizQuestionsStore>((set) => ({
    questions: [],
    status: "Loading",
    index: 0,
    userAnswer: null,
    points: 0,
    setQuestions: (questions: Question[]) =>
      set(() => ({ questions: questions })),
    setStatus: (status: string) => set(() => ({ status: status })),
    setResetExam: () => set(() => ({ index: 0, points: 0 })),
    setNextIndex: () => set((state) => ({ index: state.index + 1 })),
    setUserAnswer: (answerIndex: number | null, questionPoints: number) =>
      set((state) => ({
        userAnswer: answerIndex,
        points:
          state.questions.at(state.index)?.correctOption === answerIndex
            ? state.points + questionPoints
            : state.points,
      })),
  })),
);
