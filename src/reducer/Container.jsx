import React from "react";
import useReducerTodo from "./reducer";
import NewTodo from "../components/NewTodo";
import Todo from "../components/Todo";
import Filter from "../components/Filter";
import useReducerFilters from "./filters";

const idCounter = { value: 4 };
function Container() {
  const [state, dispatch] = useReducerTodo();

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

  const { filteredState, updateTitle, updateComplete } =
    useReducerFilters(state);

  return (
    <div>
      <div>
        <NewTodo onNewTodo={addTodo} />
        <Filter
          onTitleChanged={updateTitle}
          onCompletedChanged={updateComplete}
        />
      </div>
      <hr />
      <div>
        {filteredState.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onClick={complete}
            onDelete={remove}
          />
        ))}
      </div>
    </div>
  );
}

export default Container;
