import createStore from "fragstore";
import initialData from "../data";

export const { useStore, getStore, withStore } = createStore(initialData)

const [, setTodos] = getStore()

export function add(todo) {
  setTodos((todos) => [...todos, todo])
}

export function remove(todo) {
  setTodos((todos) => todos.filter((t) => t.id !== todo.id))
}

export function update(todo) {
  setTodos((todos) => todos.map((t) => (t.id === todo.id ? todo : t)))
}
