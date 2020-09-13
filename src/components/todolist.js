//componente presentazionale
import React from "react";
import SingleTodo from "./singleTodo";
export default function todoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        //key è una parola speciale e dentro todo non avremmo accesso all id . Quindi definiamo un'altra proprietà
        <SingleTodo
          id={i}
          key={i}
          onClick={removeTodo}
          todo={todo}
        ></SingleTodo>
      ))}
    </ul>
  );
}
