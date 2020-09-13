export default function storeReducer(state = {}, action) {
  switch (action.type) {
    case "Aggiungi_todo":
      return {
        todos: [action.todo, ...state.todos],
      };
    case "Rimuovi_todo":
      return {
        todos: [
          ...state.todos.slice(0, action.id),
          ...state.todos.slice(action.id + 1),
        ],
      };
    default:
      return { ...state };
  }
}
