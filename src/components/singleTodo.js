//componente presentazionale
import React from "react";
export default function singleTodo({ todoItem, onClick, id }) {
  return (
    <li
      className={todoItem.completed ? "completed" : ""}
      onClick={() => onClick(id)}
    >
      <span className={todoItem.completed ? "completed" : "uncomplete"}></span>
      {todoItem.todo}
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
