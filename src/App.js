import React from "react";

//import todo list and form.
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

//import style for the todo.
import "./components/TodoComponents/Todo.css";

//setup app structure for to-do list.
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>

        <div className="header">
          <h2>Your Todo</h2>
          <TodoForm />
        </div>

        <TodoList />
      </div>
    );
  }
}

export default App;
