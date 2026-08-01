import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface TaskObj {
  id: number;
  title: string;
  isDone: boolean;
}
export interface TasksStore {
  tasks: TaskObj[];
  title: string;
  setTitle: (title: string) => void;
  setTasks: (title: string) => void;
  setDeleteTask: (id: number) => void;
  setIsDone: (id: number) => void;
  setIsUpdate: (id: number, title: string) => void;
}

export const useTasksStore = create(
  devtools<TasksStore>((set) => ({
    tasks: [],
    title: "",
    setTitle: (title: string) => set(() => ({ title: title })),
    setTasks: (title: string) =>
      set((state) => ({
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: title,
            isDone: false,
          },
        ],
      })),
    setDeleteTask: (id: number) =>
      set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
    setIsDone: (id: number) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, isDone: !task.isDone } : task,
        ),
      })),
    setIsUpdate: (id: number, title: string) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, title: title } : task,
        ),
      })),
  })),
);
