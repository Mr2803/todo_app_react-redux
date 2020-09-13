export const addTodo = (todo) => {
  //   const todo = this.todoInput.current.value;
  //   store.dispatch({
  //     //il type è obbligatorio
  //     type: "Aggiungi_todo",
  //     todo: todo,
  //     //todo
  //   });
  return {
    //il type è obbligatorio
    type: "Aggiungi_todo",
    todo: todo,
    //todo
  };
};

export const removeTodo = (i) => {
  console.log(i);
  //   store.dispatch({
  //     //il type è obbligatorio
  //     type: "Rimuovi_todo",
  //     id: i,
  //     //todo
  //   });
  return {
    //il type è obbligatorio
    type: "Rimuovi_todo",
    id: i,
    //todo
  };
};
