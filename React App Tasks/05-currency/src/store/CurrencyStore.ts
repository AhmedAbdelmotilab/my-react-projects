import { create } from "zustand";

export interface CurrencyStore {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  result: number;
  setAmount: (amount: number) => void;
  setFromCurrency: (fromCurrency: string) => void;
  setToCurrency: (toCurrency: string) => void;
  setResult: (result: number) => void;
}
export const useCurrencyStore = create<CurrencyStore>((set) => ({
  amount: 0,
  fromCurrency: "USD",
  toCurrency: "EUR",
  result: 0,

  setAmount: (amount: number) => set(() => ({ amount: amount })),

  setFromCurrency: (fromCurrency: string) =>
    set(() => ({ fromCurrency: fromCurrency })),

  setToCurrency: (toCurrency: string) =>
    set(() => ({ toCurrency: toCurrency })),

  setResult: (result: number) => set(() => ({ result: result })),
}));
