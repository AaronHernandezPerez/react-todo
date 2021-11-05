import React from "react";
import NewTodo from "../components/NewTodo";
import Todo from "../components/Todo";
import Filter from "../components/Filter";
import { add, update, remove, useStore } from "./todoStore";
import { useFilterStore } from "./filterStore";
import { useFilteredTodos } from "./filter";
const idCounter = { value: 10000 };
function Container() {
  const state = useFilteredTodos();

  const addTodo = (todoTitle) => {
    add({ id: idCounter.value++, title: todoTitle, completed: false });
  };
  const complete = (todo) => {
    update({ ...todo, completed: !todo.completed });
  };
  const removeTodo = (todo) => {
    remove(todo);
  };

  const setTitle = useFilterStore.title()[1];
  const setComplete = useFilterStore.complete()[1];

  return (
    <div>
      <div>
        <NewTodo onNewTodo={addTodo} />
        <Filter onTitleChanged={setTitle} onCompletedChanged={setComplete} />
      </div>
      <hr />
      <div>
        {state.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onClick={complete}
            onDelete={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Container;
