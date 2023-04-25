import react from "react";
import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode , replace = false) {
    const newHistory = [...history];

    if (replace) {
      newHistory.pop();
    }
    setMode(newMode);
    newHistory.push(newMode);
    setHistory(newHistory);
  };

  const back = function() {
    const newHistory = [...history];

    if (newHistory.length > 1) {
      newHistory.pop();
    }
    setHistory(newHistory);
    setMode(newHistory[newHistory.length - 1]);
  };

  return { mode, transition, back };
}