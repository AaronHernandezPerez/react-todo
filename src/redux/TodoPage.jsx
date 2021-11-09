import React from "react";
import { useDispatch } from "react-redux";
import NewTodo from "../components/NewTodo";
import Todo from "../components/Todo";
import Filter from "../components/Filter";
import { add, remove, update } from "./todoSlice";
import useReduxFilters from "./filter";
import TestButton from "../components/TestButton"
const idCounter = { value: 10000 };

function TodoPage() {
  const dispatch = useDispatch();
  const { state, setTitle, setComplete, title, value } = useReduxFilters();
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

  return (
    <div>
      <div>
        <TestButton addElement={(e)=>dispatch(add(e))} changeTitle={setTitle} changeMarked={setComplete} />
        <NewTodo onNewTodo={addTodo} />
        <Filter onTitleChanged={setTitle} onCompletedChanged={setComplete} titleValue={title} completeValue={value} />
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
