import { useState, useEffect } from "react";

const useReducerFilters = (state) => {
  const [filteredState, setfilteredState] = useState(state);
  const [titleValue, settitleValue] = useState("");
  const [completeValue, setcompleteValue] = useState(false);

  useEffect(() => {
    let todos = [...state]
    if (completeValue) {
      todos = todos.filter((t) => t.completed === completeValue);
    }
    if (titleValue) {
      todos = todos.filter((t) =>
        t.title.toLowerCase().includes(titleValue.toLowerCase())
      );
    }
    setfilteredState(todos)
  }, [completeValue, state, titleValue])

  return {
    filteredState,
    completeValue,
    titleValue,
    settitleValue,
    setcompleteValue,
  };
};

export default useReducerFilters;
