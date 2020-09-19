export default function storeReducer(state = {}, action) {
  switch (action.type) {
    case "Aggiungi_todo_FULFILLLED":
      return {
        ...state,
        activeFilter: "TODO",
        todos: [action.payload.data, ...state.todos],
      };
    case "Rimuovi_todo":
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.id),
          ...state.todos.slice(action.id + 1),
        ],
      };
    case "Toggle_todo":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    case "SET_FILTER": {
      return {
        ...state,
        activeFilter: action.activeFilter,
      };
    }
    case "TODOS_FULFILLED": {
      return {
        ...state,
        todos: action.payload.data,
      };
    }
    default:
      return { ...state };
  }
}
