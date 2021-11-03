import React, { useCallback, useState } from "react";
import Input from "./Input";

function NewTodo({ onNewTodo = (d) => {} }) {
  const [newTodo, setnewTodo] = useState("");
  const change = useCallback(
    (d) => {
      setnewTodo(d);
    },
    [setnewTodo]
  );
  const addNewTodo = () => {
    onNewTodo(newTodo);
    setnewTodo("")
  };
  return (
    <div>
      <Input label="New todo" value={newTodo} onChange={change} />
      <button onClick={addNewTodo}>Add new todo</button>
    </div>
  );
}

export default NewTodo;
