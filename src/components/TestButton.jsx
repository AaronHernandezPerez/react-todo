import { operations } from "../performanceScript";
function NewTodo({ changeTitle, changeMarked, addElement }) {
  return (
    <button onClick={() => operations(changeTitle, changeMarked, addElement)}>
      Test!
    </button>
  );
}

export default NewTodo;
