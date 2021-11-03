import React from "react";
import useReducerTodo from "./reducer";
import NewTodo from "../components/NewTodo";
import Todo from "../components/Todo";

const idCounter = { value: 4 };
function Container() {
  const [state, dispatch] = useReducerTodo();
  console.log("state", state);
  const addTodo = (todoTitle) => {
    dispatch({
      action: "add",
      payload: { id: idCounter.value++, title: todoTitle, completed: false },
    });
  };

  const complete = (todo) => {
    dispatch({
      action: "update",
      payload: { ...todo, completed: !todo.completed },
    });
  };

  const remove = (todo) => {
    dispatch({
      action: "remove",
      payload: todo,
    });
  };
  return (
    <div>
      <div>
        <NewTodo onNewTodo={addTodo} />
      </div>
      <div>
        {state.map((todo) => (
          <Todo todo={todo} onClick={complete} onDelete={remove} />
        ))}
      </div>
    </div>
  );
}

export default Container;
