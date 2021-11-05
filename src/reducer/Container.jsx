import React from "react";
import useReducerTodo from "./reducer";
import NewTodo from "../components/NewTodo";
import Todo from "../components/Todo";
import Filter from "../components/Filter";
import useReducerFilters from "./filters";
import TestButton from "../components/TestButton";

const idCounter = { value: 10000 };
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

  const {
    filteredState,
    titleValue,
    completeValue,
    settitleValue,
    setcompleteValue,
  } = useReducerFilters(state);

  return (
    <div>
      <div>
        <TestButton
          addElement={(e) => dispatch({ action: "add", payload: e })}
          changeTitle={settitleValue}
          changeMarked={setcompleteValue}
        />
        <NewTodo onNewTodo={addTodo} />
        <Filter
          titleValue={titleValue}
          completeValue={completeValue}
          onTitleChanged={settitleValue}
          onCompletedChanged={setcompleteValue}
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
