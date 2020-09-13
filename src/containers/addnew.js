import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import addTodoComponent from "../components/addTodo";

// const mapDispatchToProps = (dispatch) => {
//   return {
//     //deve corrispondere al valore che ho passato in addTodo
//     addNew: (todo) => {
//       dispatch(addTodo(todo));
//     },
//   };
// };
// export default connect(null, mapDispatchToProps)(addTodoComponent);

//qui redux in automatico prende la proprietà addNew(stesso nome utilizzato nella addTodo )e avvolgerà il metodo addTodo in una dispatch in automatico
const methods = { addNew: addTodo };
export default connect(null, methods)(addTodoComponent);
