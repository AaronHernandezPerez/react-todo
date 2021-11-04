import { useStore } from "./todoStore";
import { useFilterStore } from "./filterStore";

export const useFilteredTodos = () => {
  let [todos] = useStore();
  const [filters] = useFilterStore();

  if (filters.complete) {
    todos = todos.filter((t) => t.completed === filters.complete);
  }
  if (filters.title) {
    todos = todos.filter((t) =>
      t.title.toLowerCase().includes(filters.title.toLowerCase())
    );
  }
  return todos;
};
