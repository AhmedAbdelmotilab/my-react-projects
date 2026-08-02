import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface DataCounter {
  count: number;
  step: number;
  setCount: (count: number) => void;
  setStep: (step: number) => void;
  setInc: () => void;
  setDec: () => void;
  setRest: () => void;
}
export const useDateCounter = create(
  devtools<DataCounter>((set) => ({
    count: 0,
    step: 1,
    setCount: (count: number) => set(() => ({ count: count })),
    setStep: (step: number) => set(() => ({ step: step })),
    setRest: () => set(() => ({ count: 0, step: 1 })),
    setInc: () => set((state) => ({ count: state.count + state.step })),
    setDec: () => set((state) => ({ count: state.count - state.step })),
  })),
);
