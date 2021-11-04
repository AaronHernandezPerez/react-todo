import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../redux/todoSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    filter: filterSlice,
  },
});

export default store;
