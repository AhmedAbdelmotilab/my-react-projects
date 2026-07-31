import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface TaskData {
  id: number;
  title: string;
  isDone: boolean;
}
export interface TasksStore {
  tasks: TaskData[];
  setTasks: (title: string) => void;
  setDeleteTask: (id: number) => void;
  setDoneTask: (id: number) => void;
}
export const useTasksStore = create(
  devtools<TasksStore>((set) => ({
    tasks: [],
    setTasks: (title: string) =>
      set((state) => ({
        tasks: [
          ...state.tasks,
          { id: Date.now(), title: title, isDone: false },
        ],
      })),
    setDeleteTask: (id: number) =>
      set((state) => ({ tasks: [...state.tasks.filter((t) => t.id !== id)] })),
    setDoneTask: (id: number) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, isDone: !task.isDone } : task,
        ),
      })),
  })),
);
