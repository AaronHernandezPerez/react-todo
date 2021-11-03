import React, { useCallback, useMemo } from "react";

function Todo({ todo, onClick, onDelete }) {
  const click = useCallback(() => {
    onClick(todo);
  }, [todo, onClick]);
  const completed = useMemo(
    () => (todo.completed ? "completed" : ""),
    [todo.completed]
  );
  const remove = useCallback(() => {
    onDelete(todo);
  }, [onDelete, todo]);
  
  return (
    <div className={["todo", completed]} onClick={click}>
      <span>{todo.title}</span>
      <input type="checkbox" checked={todo.completed} readOnly />
      <button onClick={remove}>Delete</button>
    </div>
  );
}

export default Todo;
