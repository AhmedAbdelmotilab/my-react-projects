import { useState } from "react";
interface BoxComponentProps {
  children: React.ReactNode;
}
function BoxComponent({ children }: BoxComponentProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
export default BoxComponent;
