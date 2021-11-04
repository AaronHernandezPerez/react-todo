import createStore from "fragstore";

export const { useStore: useFilterStore } = createStore({
  title: "",
  complete: false,
});
