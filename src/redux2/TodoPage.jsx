import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NewTodo from "../components/NewTodo";
import Todo from "../components/Todo";
import Filter from "../components/Filter";
import { add, remove, update } from "../redux/todoSlice";
import { filterComplete, filterTitle } from "./filterSlice";
import filteredTodos from "./filter";

const idCounter = { value: 4 };

function TodoPage() {
  const dispatch = useDispatch();
  const state = useSelector(filteredTodos);

  const addTodo = (todoTitle) => {
    dispatch(
      add({ id: idCounter.value++, title: todoTitle, completed: false })
    );
  };
  const complete = (todo) => {
    dispatch(update({ ...todo, completed: !todo.completed }));
  };
  const removeTodo = (todo) => {
    dispatch(remove(todo));
  };

  const setTitle = (title) => {
    dispatch(filterTitle(title));
  };
  const setComplete = (complete) => {
    dispatch(filterComplete(complete));
  };

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

export default TodoPage;
