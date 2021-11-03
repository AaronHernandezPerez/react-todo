import { useReducer } from "react";
import initialData from "../data";

function todoReducer(state, { action, payload }) {
  const newState = [...state];
  switch (action) {
    case "add":
      newState.push(payload);
      break;
    case "remove":
      const rmIndex = state.indexOf(payload);
      newState.splice(rmIndex, 1);
      break;
    case "update":
      const upIndex = state.findIndex((t) => t.id === payload.id);
      newState[upIndex] = payload;
      break;
    default:
      throw Error("Unknown action: " + action.type);
  }
  return newState;
}

export default function useReducerTodo() {
  return useReducer(todoReducer, initialData);
}
