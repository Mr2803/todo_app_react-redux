import { API_URL, API_FILTER_URL } from "../config/config";
import {
  TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
} from "./actionTypes";
import axios from "axios";
export const getTodos = () => {
  return {
    type: TODOS,
    payload: axios.get(API_URL),
  };
};

// export const getInitialFilter = () => {
//   return {
//     type: "INITIAL_FILTER",
//     payload: axios.get(API_FILTER_URL),
//   };
// };

export const addTodo = (todo) => {
  //   const todo = this.todoInput.current.value;
  //   store.dispatch({
  //     //il type è obbligatorio
  //     type: "Aggiungi_todo",
  //     todo: todo,
  //     //todo
  //   });
  return {
    //Aggiungi_todo_FULFILLED
    //il type è obbligatorio
    type: ADD_TODO,
    payload: axios.post(API_URL, {
      todo: todo,
      completed: false,
    }),
    //todo
  };
};

export const removeTodo = (i) => {
  console.log(i);
  //   store.dispatch({
  //     //il type è obbligatorio
  //     type: "Rimuovi_todo",
  //     id: i,
  //     //todo
  //   });
  return {
    //il type è obbligatorio
    type: REMOVE_TODO,
    id: i,
    payload: axios.delete(API_URL + "/" + i, { id: i }),
    //todo
  };
};
export const toggleTodo = (i, value) => {
  console.log(i);
  //   store.dispatch({
  //     //il type è obbligatorio
  //     type: "Rimuovi_todo",
  //     id: i,
  //     //todo
  //   });
  return {
    //il type è obbligatorio
    type: TOGGLE_TODO,
    payload: axios.patch(API_URL + "/" + i, {
      completed: value,
    }),
    //todo
  };
};

export const filterTodo = (filter = "ALL") => {
  return {
    type: SET_FILTER,
    payload: axios.post(API_FILTER_URL, {
      filter,
    }),
  };
};
