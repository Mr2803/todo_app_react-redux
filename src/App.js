// Il primo passo è installare redux con npm i redux
// Per creare una store va poi importata la funzione createStore da redux import { createStore } from "redux";
// Creiamo poi la funzione createStore ( per richiamare la store stessa , che rappresenta il mio magazzino dello stato)
// La create store riceve 3 parametri . Il primo è obbligatorio ed è il reducer ossia una funzione che riceve lo stato precedente .Il secondo parametro è un valore opzionale , in questo caso gli passiamo il valore iniziale dello stato
//la action non è altro che il contenuto dell'oggetto all'interno della dispatch
import React, { Component } from "react";
//importo la store da redux

import "./App.css";
import Header from "./components/header";
import AddNewTodo from "./containers/addnew";
import MyTodoList from "./containers/mytodolist";
import FooterFilter from "./containers/todofootercontainer";
import ErrorBoundary from "./components/errorboundary";
import { getTodos, getInitialFilter } from "./actions/index";
import { connect } from "react-redux";
// console.log(store.getState());
class App extends Component {
  componentDidMount() {
    console.log(this.props.getTodos);
    this.props.getTodos();
    this.props.getInitialFilter();
  }
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   todos: [],
  //   // };
  //   // this.todoInput = React.createRef("input");
  // }

  // componentDidMount() {
  //   //alla store vanno passati 2 parametri , una funzione reducer e poi lo stato iniziale dell'app
  //   //la funzione reducer serve per far si che la store prenda uno stato iniziale (parametro passato al mio reducer , in questo caso oggetto vuoto)
  //   // this.setState({
  //   //   todos: [...store.getState().todos],
  //   // });
  //   // store.subscribe(() => {
  //   //   console.log(store.getState());
  //   //   this.setState({
  //   //     todos: [...store.getState().todos],
  //   //   });
  //   // });
  // }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <AddNewTodo></AddNewTodo>
          <ErrorBoundary>
            <MyTodoList />
          </ErrorBoundary>
          <FooterFilter></FooterFilter>
        </div>
      </div>
    );
  }
}

export default connect(null, { getTodos, getInitialFilter })(App);
