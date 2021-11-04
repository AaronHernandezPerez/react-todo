import { createSelector } from "@reduxjs/toolkit";

const todos = (state) => state.todo;
const filters = (state) => state.filter;
const filteredTodos = createSelector([todos, filters], (todos, filters) => {
  if (filters.complete) {
    todos = todos.filter((t) => t.completed === filters.complete);
  }
  if (filters.title) {
    todos = todos.filter((t) =>
      t.title.toLowerCase().includes(filters.title.toLowerCase())
    );
  }
  return todos;
});

export default filteredTodos;
