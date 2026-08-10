import { create } from "zustand";
import { devtools } from "zustand/middleware";
// const defaultCities = [
//   {
//     cityName: "Lisbon",
//     country: "Portugal",
//     emoji: "🇵🇹",
//     date: "2027-10-31T15:59:59.138Z",
//     notes: "My favorite city so far!",
//     position: {
//       lat: 38.727881642324164,
//       lng: -9.140900099907554,
//     },
//     id: 73930385,
//   },
//   {
//     cityName: "Madrid",
//     country: "Spain",
//     emoji: "🇪🇸",
//     date: "2027-07-15T08:22:53.976Z",
//     notes: "",
//     position: {
//       lat: 40.46635901755316,
//       lng: -3.7133789062500004,
//     },
//     id: 17806751,
//   },
//   {
//     cityName: "Berlin",
//     country: "Germany",
//     emoji: "🇩🇪",
//     date: "2027-02-12T09:24:11.863Z",
//     notes: "Amazing 😃",
//     position: {
//       lat: 52.53586782505711,
//       lng: 13.376933665713324,
//     },
//     id: 98443197,
//   },
// ];

export interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
}
export interface WorldWiseStore {
  cities: City[];
  setCities: (city: City[]) => void;
  isLoading: boolean;
  setIsLoading: (load: boolean) => void;
}
export const useWorldWiseStore = create(
  devtools<WorldWiseStore>((set) => ({
    cities: [],
    isLoading: false,
    setCities: (cities: City[]) => set(() => ({ cities: cities })),
    setIsLoading: (load: boolean) => set(() => ({ isLoading: load })),
  })),
);
