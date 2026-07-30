import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
interface IContent {
  summary: string;
  details: string;
}
interface TabbedProps {
  content: IContent[];
}
interface TabProps {
  num: number;
  activeTab: number;
  onClick: (num: number) => void;
}
interface TabContentProps {
  item?: IContent;
}
console.log(<DifferentContent />);
export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }: TabbedProps) {
  const [activeTab, setActiveTab] = useState(0);
  function handelActiveTab(num: number) {
    setActiveTab(() => num);
  }
  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={handelActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={handelActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={handelActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={handelActiveTab} />
      </div>
      {activeTab <= 2 ? (
        <TabContent
          item={content.at(activeTab)}
          key={content.at(activeTab)?.summary}
        />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

function Tab({ num, activeTab, onClick }: TabProps) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }: TabContentProps) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }
  function handleIncByThree() {
    setLikes(likes + 3);
  }
  function handelUndoButton() {
    setShowDetails(true);
    setLikes(0);
  }
  function handelRestUndoAfterTwoSec() {
    setTimeout(() => {
      setShowDetails(true);
      setLikes(0);
    }, 2000);
  }
  return (
    <div className="tab-content">
      <h4>{item!.summary}</h4>
      {showDetails && <p>{item!.details}</p>}
      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>
        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleIncByThree}>+++</button>
        </div>
      </div>
      <div className="tab-undo">
        <button onClick={handelUndoButton}>Undo</button>
        <button onClick={handelRestUndoAfterTwoSec}>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
