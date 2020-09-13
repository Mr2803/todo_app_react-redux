// import React, { Fragment } from "react";
import React from "react";
export default function addTodoComponent({ addNew }) {
  let todoInput;
  return (
    <div className="addTodo">
      <input
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            addNew(todoInput.value);
            todoInput.value = "";
          }
        }}
        ref={(node) => {
          todoInput = node;
        }}
      ></input>
      <button
        onClick={() => {
          addNew(todoInput.value);
          todoInput.value = "";
        }}
      >
        Aggiungi
      </button>
    </div>
  );
}
