import { useEffect, useState } from "react";
import { Archive } from "./components/Archive";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode", isFakeDark);
  }, [isFakeDark]);

  return (
    <section>
      <button onClick={() => setIsFakeDark((current) => !current)} className="btn-fake-dark-mode">
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <Header />
      <Main />
      <Archive />
      <Footer />
    </section>
  );
}

export default App;
