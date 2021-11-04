import { Provider } from "react-redux";
import store from "./store";
import TodoPage from "./TodoPage";

function Container() {
  return (
    <div>
      <Provider store={store}>
        <TodoPage />
      </Provider>
    </div>
  );
}

export default Container;
