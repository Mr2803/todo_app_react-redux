import { API_URL } from "../config/config";
import axios from "axios";
export const getTodos = () => {
  return {
    type: "TODOS",
    payload: axios.get(API_URL),
  };
};

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
    type: "Aggiungi_todo",
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
    type: "Rimuovi_todo",
    id: i,
    //todo
  };
};
export const toggleTodo = (i) => {
  console.log(i);
  //   store.dispatch({
  //     //il type è obbligatorio
  //     type: "Rimuovi_todo",
  //     id: i,
  //     //todo
  //   });
  return {
    //il type è obbligatorio
    type: "Toggle_todo",
    id: i,
    //todo
  };
};

export const filterTodo = (filter = "ALL") => {
  return {
    type: "SET_FILTER",
    activeFilter: filter,
  };
};
