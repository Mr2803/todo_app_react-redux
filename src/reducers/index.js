export default function storeReducer(state = {}, action) {
  switch (action.type) {
    case "Aggiungi_todo_FULFILLED":
      return {
        ...state,
        activeFilter: "TODO",
        todos: [action.payload.data, ...state.todos],
      };
    case "Rimuovi_todo_FULFILLED":
      return {
        ...state,
        // todos: [
        //   ...state.todos.slice(0, action.id),
        //   ...state.todos.slice(action.id + 1),
        // ],
        todos: state.todos.filter((e) => e.id !== action.payload.config.id),
      };
    case "Toggle_todo_FULFILLED":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.data.id) {
            return todo;
          }
          return {
            ...todo,
            completed: action.payload.data.completed,
          };
        }),
      };
    case "SET_FILTER_FULFILLED": {
      return {
        ...state,
        activeFilter: action.payload.data.filter,
      };
    }
    case "TODOS_FULFILLED": {
      return {
        ...state,
        todos: action.payload.data,
      };
    }
    case "INITIAL_FILTER_FULFILLED": {
      return {
        ...state,
        activeFilter: action.payload.data.filter,
      };
    }
    //REJECTED
    case "TODOS_REJECTED":
    case "Aggiungi_todo_REJECTED":
    case "Rimuovi_todo_REJECTED":
    case "Toggle_todo_REJECTED":
    case "SET_FILTER_REJECTED":
    case "INITIAL_FILTER_REJECTED":
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload.message,
      };

    //END_REJECTED
    default:
      return { ...state };
  }
}
