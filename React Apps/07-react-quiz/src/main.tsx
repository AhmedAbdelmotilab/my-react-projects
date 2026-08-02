import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppReducer from "./components/Reducer/AppReducer";
import AppZustand from "./components/Zustand/AppZustand";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppZustand />
    <AppReducer />
  </StrictMode>,
);
