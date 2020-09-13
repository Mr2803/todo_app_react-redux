export default function storeReducer(state = {}, action) {
  switch (action.type) {
    case "Aggiungi_todo":
      return {
        ...state,
        activeFilter: "TODO",
        todos: [
          {
            todo: action.payload.text,
            completed: action.payload.completed,
            id: state.todos.length,
          },
          ...state.todos,
        ],
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
    default:
      return { ...state };
  }
}
