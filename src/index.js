import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, createStore, compose } from "redux";
import storeReducer from "./reducers/index";
import { Provider } from "react-redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import axios from "axios";
let storetodos = {};
// if (localStorage.getItem("mytodolist")) {
//   const currentState = JSON.parse(localStorage.getItem("mytodolist"));
//   if (currentState) {
//     storetodos = currentState;
//   }
// }
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//creazione middleware
// function logger({ getState, dispatch }) {
//   console.log("MIDDLEWARE CHIAMATO");
//   return function (next) {
//     console.log("PRIMA DELLA CHIAMATA", getState());
//     return function (action) {
//       console.log("AZIONE", action);
//       console.log("PRIMA DELL'AZIONE", getState());
//       let result = next(action);
//       console.log("DOPO L'AZIONE", getState());
//       console.log("RISULTATO", result);
//       return result;
//     };
//   };
// }

// const logger2 = ({ getState, dispatch }) => (next) => (action) => {
//   return next(action);
// };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  storeReducer,
  { ...storetodos },
  composeEnhancers(applyMiddleware(logger, promise))
);

// store.subscribe(() => {
//   const currentState = JSON.stringify(store.getState());
//   localStorage.setItem("mytodolist", currentState);
// });
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
