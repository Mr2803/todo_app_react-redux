//componente presentazionale
import React from "react";
import { removeTodo } from "../actions";
export default function singleTodo({ todoItem, toggleTodo, id, removeTodo }) {
  return (
    <li
      onClick={() => toggleTodo(id, !todoItem.completed)}
      className={todoItem.completed ? "completed" : ""}
    >
      <span className={todoItem.completed ? "completed" : "uncomplete"}></span>
      {todoItem.todo}
      <span
        className="cross"
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(id);
        }}
      ></span>
      {/* <button
      // onClick={() => {
      //   this.removeTodo(i);
      // }}
      //quando todo eseguirà onclick in realtà starà eseguendo dispatch(removeTodo(i))
      >
        Rimuovi
      </button> */}
    </li>
  );
}
