import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data";

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialData,
  reducers: {
    add: (state, { payload }) => {
      state.push(payload);
    },
    remove: (state, { payload }) => {
      const rmIndex =  state.findIndex((t) => t.id === payload.id);
      state.splice(rmIndex, 1);
    },
    update: (state, { payload }) => {
      const upIndex = state.findIndex((t) => t.id === payload.id);
      state[upIndex] = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, update } = todoSlice.actions;

export default todoSlice.reducer;
