//dobbiamo ora fare in modo che questo componente creato colleghi la store alla todolist (la store è installata adesso globalmente quindi tutti i componenti possono accedervi)
import { connect } from "react-redux";
import TodoList from "../components/todolist";
import { removeTodo } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    todos: [...state.todos],
  };
};
//mytodolist passa come secondo argomento alla connect i metodi che verranno mappati
const myConnect = connect(mapStateToProps, { removeTodo });
const MyTodoList = myConnect(TodoList);

export default MyTodoList;
