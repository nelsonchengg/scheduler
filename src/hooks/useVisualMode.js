import react, { useState } from "react";

// export default function useVisualMode(initial) {
//   const [mode, setMode] = useState(initial);
//   const [history, setHistory] = useState([initial]);

//   const transition = function(newMode , replace = false) {
//     const newHistory = [...history];

//     if (replace) {
//       newHistory.pop();
//     }
//     setMode(newMode);
//     newHistory.push(newMode);
//     setHistory(newHistory);
//   };

//   const back = function() {
//     const newHistory = [...history];

//     if (newHistory.length > 1) {
//       newHistory.pop();
//     }
//     setHistory(newHistory);
//     setMode(newHistory[newHistory.length - 1]);
//   };

//   return { mode, transition, back };
// }

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setHistory(prev => replace ? [...prev.slice(0, -1), newMode] : [...prev, newMode])
  }

  function back() {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, -1)])
    }

  }

  return { mode: history[history.length - 1], transition, back}
} 