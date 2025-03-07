import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1001,
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces",
  },
  {
    id: 1002,
    question: "Who developed React?",
    answer: "Facebook",
  },
  {
    id: 1003,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 1004,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 1005,
    question: "What is JSX?",
    answer: "A syntax extension that allows writing HTML inside JavaScript",
  },
  {
    id: 1006,
    question: "What is a functional component in React?",
    answer: "A JavaScript function that returns JSX",
  },
  {
    id: 1007,
    question: "What is a class component?",
    answer: "A component defined using ES6 classes",
  },
  {
    id: 1008,
    question: "How do you pass data to a component?",
    answer: "Using props",
  },
  {
    id: 1009,
    question: "How do you manage state in a functional component?",
    answer: "Using the useState hook",
  },
  {
    id: 1010,
    question: "What is the difference between state and props?",
    answer:
      "State is mutable and managed within a component; props are immutable and passed from parent to child",
  },
  {
    id: 1011,
    question: "What hook is used for side effects in React?",
    answer: "useEffect",
  },
  {
    id: 1012,
    question: "What is the purpose of useEffect?",
    answer: "To handle side effects such as data fetching and subscriptions",
  },
  {
    id: 1013,
    question: "What is the virtual DOM?",
    answer:
      "A lightweight copy of the real DOM that React uses to optimize updates",
  },
  {
    id: 1014,
    question: "How does React update the UI efficiently?",
    answer:
      "By using the virtual DOM to compare changes and updating only what is necessary",
  },
  {
    id: 1015,
    question: "What is a controlled component?",
    answer: "A component where form elements are controlled by React state",
  },
  {
    id: 1016,
    question: "What is an uncontrolled component?",
    answer: "A component where form elements maintain their own state",
  },
  {
    id: 1017,
    question: "How do you handle forms in React?",
    answer: "Using controlled components and event handlers",
  },
  {
    id: 1018,
    question: "What is the purpose of keys in React lists?",
    answer:
      "To help React identify which items have changed, added, or removed",
  },
  {
    id: 1019,
    question: "What happens if you don't provide keys in lists?",
    answer: "React may re-render inefficiently, leading to performance issues",
  },
  {
    id: 1020,
    question: "What is React Router?",
    answer: "A library for handling navigation in React applications",
  },
  {
    id: 1021,
    question: "What is the useContext hook used for?",
    answer: "To share state across components without prop drilling",
  },
  {
    id: 1022,
    question: "What is prop drilling?",
    answer: "Passing props through multiple levels of components unnecessarily",
  },
  {
    id: 1023,
    question: "How can you avoid prop drilling?",
    answer: "By using the Context API or state management libraries",
  },
  {
    id: 1024,
    question: "What is Redux?",
    answer:
      "A state management library for managing global state in React applications",
  },
  {
    id: 1025,
    question: "What are the core principles of Redux?",
    answer:
      "Single source of truth, state is read-only, and changes are made with pure functions",
  },
  {
    id: 1026,
    question: "What is the useReducer hook?",
    answer: "A hook for managing complex state logic in functional components",
  },
  {
    id: 1027,
    question: "What is the difference between useState and useReducer?",
    answer:
      "useState is for simple state, while useReducer is better for complex state logic",
  },
  {
    id: 1028,
    question: "What is a higher-order component (HOC)?",
    answer:
      "A function that takes a component and returns a new component with enhanced functionality",
  },
  {
    id: 1029,
    question: "What are React fragments?",
    answer: "A way to group multiple elements without adding extra DOM nodes",
  },
  {
    id: 1030,
    question: "What is lazy loading in React?",
    answer: "A technique to load components only when they are needed",
  },
  {
    id: 1031,
    question: "What is React.memo?",
    answer:
      "A higher-order component that optimizes functional components by memoizing them",
  },
  {
    id: 1032,
    question: "What is the purpose of useRef?",
    answer:
      "To create a reference to a DOM element or persist values across renders without causing re-renders",
  },
  {
    id: 1033,
    question: "What is reconciliation in React?",
    answer:
      "The process of updating the virtual DOM and syncing changes with the real DOM",
  },
  {
    id: 1034,
    question: "What is a React Portal?",
    answer:
      "A way to render elements outside of their parent component’s DOM hierarchy",
  },
  {
    id: 1035,
    question: "What is concurrent mode in React?",
    answer:
      "An experimental feature for improving responsiveness by allowing multiple rendering tasks",
  },
  {
    id: 1036,
    question: "What is Strict Mode in React?",
    answer:
      "A development-only tool for highlighting potential issues in a React application",
  },
  {
    id: 1037,
    question: "How do you fetch data in React?",
    answer: "Using fetch API, Axios, or React Query inside useEffect",
  },
  {
    id: 1038,
    question: "What is a custom hook in React?",
    answer:
      "A reusable function that uses built-in hooks to share logic between components",
  },
  {
    id: 1039,
    question: "How can you optimize performance in React applications?",
    answer:
      "Using memoization, React.memo, useCallback, useMemo, and optimizing re-renders",
  },
  {
    id: 1040,
    question: "What is useCallback?",
    answer:
      "A hook that memoizes a function to prevent unnecessary re-creation",
  },
  {
    id: 1041,
    question: "What is useMemo?",
    answer: "A hook that memoizes computed values for performance optimization",
  },
  {
    id: 1042,
    question: "What is an event in React?",
    answer:
      "An interaction that triggers an event handler, such as clicks or key presses",
  },
  {
    id: 1043,
    question: "How do you handle errors in React?",
    answer:
      "Using try-catch blocks, error boundaries, and error-handling hooks",
  },
  {
    id: 1044,
    question: "What is an error boundary?",
    answer:
      "A class component that catches errors in child components and displays a fallback UI",
  },
  {
    id: 1045,
    question: "What is SSR in React?",
    answer:
      "Server-Side Rendering, where React pages are rendered on the server before being sent to the client",
  },
  {
    id: 1046,
    question: "What is hydration in React?",
    answer:
      "The process of attaching event listeners to server-rendered HTML on the client",
  },
  {
    id: 1047,
    question: "What is the difference between CSR and SSR?",
    answer:
      "CSR renders content on the client, while SSR pre-renders content on the server",
  },
  {
    id: 1048,
    question: "What framework is commonly used for SSR in React?",
    answer: "Next.js",
  },
  {
    id: 1049,
    question: "What is React Native?",
    answer: "A framework for building mobile apps using React",
  },
  {
    id: 1050,
    question: "What is the primary benefit of React?",
    answer: "Efficient UI rendering with reusable components",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
