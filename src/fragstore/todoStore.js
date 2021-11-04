import createStore from "fragstore";
import initialData from "../data";

export const { useStore, getStore, withStore } = createStore(initialData);

export const add = (todo) => {
  const [todos, setTodos] = getStore();
  setTodos([...todos, todo]);
};

export const remove = (todo) => {
  const [todos, setTodos] = getStore();
  const rmIndex = todos.indexOf(todo);
  setTodos([...todos, todo].splice(rmIndex, 1));
};

export const update = (todo) => {
  const [todos, setTodos] = getStore();
  const upIndex = todos.findIndex((t) => t.id === todo.id);
  todos[upIndex] = todo;
  setTodos(todos);
};
