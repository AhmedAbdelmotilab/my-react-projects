import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Skill({ obj }) {
  const one = "👷";
  const two = "☺️";
  const three = "😎";
  return (
    <div>
      <h3 style={{ background: `${obj.color}` }}>
        {obj.skill} <span></span>
        {obj.level === "beginner"
          ? one
          : obj.level === "intermediate"
            ? two
            : three}
      </h3>
    </div>
  );
}
function Dev() {
  return (
    <div className="dev">
      <img src="images/jonas.jpeg" alt="Jonas"></img>
      <div className="cardData">
        <h1>Ahmed Abdelmotilab</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sit
          autem magnam, esse maxime eius voluptatem voluptas deleniti architecto
          laborum voluptate similique! Libero facilis ducimus eaque earum quasi
          commodi est.
        </p>
      </div>
      <div className="cardFooter">
        {skills.map((s) => (
          <Skill obj={s} key={s.skill} />
        ))}
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Dev />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
