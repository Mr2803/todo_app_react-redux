//dobbiamo ora fare in modo che questo componente creato colleghi la store alla todolist (la store è installata adesso globalmente quindi tutti i componenti possono accedervi)
import { connect } from "react-redux";
import TodoList from "../components/todolist";
import { removeTodo, toggleTodo } from "../actions/index";
const filterTodos = (todos = [], filter = "ALL") => {
  switch (filter) {
    case "TODO":
      return todos.filter((todo) => !todo.completed);
    case "COMPLETED":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};
const mapStateToProps = (state) => {
  return {
    ...state,
    todos: filterTodos(state.todos, state.setFilter),
  };
};
//mytodolist passa come secondo argomento alla connect i metodi che verranno mappati
const myConnect = connect(mapStateToProps, { removeTodo, toggleTodo });
const MyTodoList = myConnect(TodoList);

export default MyTodoList;
