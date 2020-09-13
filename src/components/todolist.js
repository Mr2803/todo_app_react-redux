//componente presentazionale
import React from "react";
import SingleTodo from "./singleTodo";
export default function todoList({ todos, removeTodo, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        //key è una parola speciale e dentro todo non avremmo accesso all id . Quindi definiamo un'altra proprietà
        <SingleTodo
          id={todo.id}
          key={todo.id}
          onClick={toggleTodo}
          todoItem={todo}
        ></SingleTodo>
      ))}
    </ul>
  );
}
