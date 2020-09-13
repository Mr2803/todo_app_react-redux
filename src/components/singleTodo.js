//componente presentazionale
import React from "react";
export default function singleTodo({ todo, onClick, id }) {
  return (
    <li onClick={() => onClick(id)}>
      {todo}
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
