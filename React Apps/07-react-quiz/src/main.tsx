import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppZustand from "./components/Zustand/AppZustand";
// import AppReducer from "./components/Reducer/AppReducer";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppZustand />
    {/* <AppReducer /> */}
  </StrictMode>,
);
