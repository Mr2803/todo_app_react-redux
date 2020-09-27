//componente presentazionale
import React from "react";
import SingleTodo from "./singleTodo";
import PropTypes from "prop-types";
export default function todoList(props) {
  console.log("queste sono le props " + props.errorMessage);
  if (props.hasError) {
    throw new Error(props.errorMessage);
  }
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

todoList.propTypes = {
  props: PropTypes.shape({
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    todos: PropTypes.array,
  }),
};
