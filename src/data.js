import todosFile from "./todos.json"
const initialData = todosFile.todos

// const initialData = [
//   { id: 1, title: "Programming", completed: true },
//   { id: 2, title: "Fly high", completed: false },
//   { id: 3, title: "Sleep", completed: false },
// ];

export const idCounter = { value: 10000 };


export default initialData;
