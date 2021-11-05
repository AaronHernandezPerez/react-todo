import React from "react";
import NewTodo from "../components/NewTodo";
import Todo from "../components/Todo";
import Filter from "../components/Filter";
import { add, update, remove } from "./todoStore";
import { useFilterStore } from "./filterStore";
import { useFilteredTodos } from "./filter";
import TestButton from "../components/TestButton";
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

  const [titleValue, setTitle] = useFilterStore.title();
  const [completeValue, setComplete] = useFilterStore.complete();

  return (
    <div>
      <div>
        <TestButton addElement={add} changeMarked={setComplete} changeTitle={setTitle} />
        <NewTodo onNewTodo={addTodo} />
        <Filter onTitleChanged={setTitle} onCompletedChanged={setComplete} titleValue={titleValue} completeValue={completeValue}/>
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
