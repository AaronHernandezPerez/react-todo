
import { useState, useEffect } from "react";

const useReducerFilters = (state) => {
  const [filteredState, setfilteredState] = useState(state);

  useEffect(() => {
    setfilteredState(state);
  }, [state, setfilteredState]);
  const onFilterTitle = (title) => {
    setfilteredState(
      state.filter((t) => t.title.toLowerCase().includes(title.toLowerCase()))
    );
  };
  const onFilterComplete = (completed) => {
    if (completed) {
      setfilteredState(state.filter((t) => t.completed === completed));
    } else {
      setfilteredState(state);
    }
  };

  return {
    filteredState,
    onFilterTitle,
    onFilterComplete,
  };
};


 export default useReducerFilters