const Questions = [
  "What is the Virtual DOM?",
  "What is the difference between state and props?",
  "What are React Hooks?",
  "What is the purpose of useEffect?",
  "How do you pass data from a parent component to a child component?",
  "What is JSX?",
  "Why should you not modify state directly in React?",
  "What is the significance of the key prop in lists?",
  "What is a functional component?",
  "What is lifting state up?",
];

const Answers = [
  "A lightweight copy of the real DOM that React uses to optimize rendering performance by updating only changed elements.",
  "Props are read-only data passed from parents to children, while state is local, mutable data managed within the component.",
  "Functions that let you 'hook into' React state and lifecycle features from functional components.",
  "To perform side effects in functional components, such as data fetching, subscriptions, or manual DOM changes.",
  "By passing them as custom attributes (props) to the child component.",
  "A syntax extension for JavaScript that allows you to write HTML-like structures within JavaScript code.",
  "Because React relies on state changes to trigger re-renders; using setState or setters ensures React detects the change.",
  "It helps React identify which items have changed, been added, or removed, which is crucial for efficient reconciliation.",
  "A JavaScript function that accepts props as an argument and returns a React element (JSX) to be rendered.",
  "The practice of moving shared state to the closest common ancestor component so that multiple components can share it.",
];
