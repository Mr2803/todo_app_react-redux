//componente presentazionale
import React from "react";
import SingleTodo from "./singleTodo";
export default function todoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        //key è una parola speciale e dentro todo non avremmo accesso all id . Quindi definiamo un'altra proprietà
        <SingleTodo
          todoItem={todo}
          id={todo.id}
          key={todo.id}
          // onClick={toggleTodo}
          // todoItem={todo}
          // removeTodo={removeTodo}
          {...props}
        ></SingleTodo>
      ))}
    </ul>
  );
}
