import { useState } from "react";
import { useSelector } from "react-redux";

const useReduxFilters = () => {
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState(false);

  const state = useSelector((state) => {
    let filteredState = state.todo;
    if (complete) {
      filteredState = filteredState.filter((t) => t.completed === complete);
    }
    if (title) {
      filteredState = filteredState.filter((t) =>
        t.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    return filteredState;
  });

  return {
    state,
    setTitle,
    setComplete,
  };
};

export default useReduxFilters;
