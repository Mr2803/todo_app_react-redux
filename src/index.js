import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import storeReducer from "./reducers/index";
import { Provider } from "react-redux";
let storetodos = {
  activeFilter: "ALL",
  todos: [
    { id: 0, todo: "Studiare react", completed: false },
    { id: 1, todo: "Lavorare su bubble", completed: false },
    { id: 2, todo: "Chiamare Bobo", completed: false },
  ],
};
if (localStorage.getItem("mytodolist")) {
  const currentState = JSON.parse(localStorage.getItem("mytodolist"));
  if (currentState) {
    storetodos = currentState;
  }
}
const store = createStore(
  storeReducer,
  { ...storetodos },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const currentState = JSON.stringify(store.getState());
  localStorage.setItem("mytodolist", currentState);
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
