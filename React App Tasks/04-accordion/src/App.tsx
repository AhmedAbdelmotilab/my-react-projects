import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Modern digital design relies heavily on placeholder content to visualize layouts before the final copywriting is complete.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Effective communication requires clarity. When building functional prototypes, maintaining realistic content lengths prevents unexpected layout shifts during the development phase.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Ultimately, the primary goal of any design system is to facilitate seamless interaction between the user and the underlying technology.",
  },
];
function AccordionItems({
  num,
  title,
  text,
}: {
  num: number;
  title: string;
  text: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  function handelToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handelToggle}>
      <p className="number ">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <div className="content-box">{text}</div> : ""}
    </div>
  );
}
function Accordion({ data }: { data: typeof faqs }) {
  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccordionItems
          num={index + 1}
          title={item.title}
          text={item.text}
          key={item.title}
        />
      ))}
    </div>
  );
}
function App() {
  return <Accordion data={faqs} />;
}
export default App;
