import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  complete: false,
};

export const filterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    filterTitle: (state, { payload }) => {
      state.title = payload;
    },
    filterComplete: (state, { payload }) => {
      state.complete = payload;
    },
  },
});

export const { filterTitle, filterComplete } = filterSlice.actions;

export default filterSlice.reducer;
