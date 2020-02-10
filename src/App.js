import React from "react";

//import todo list and form.
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

//import style for the todo.
import "./components/TodoComponents/Todo.css";

//setup data of the todo
const todo = [];

//setup app structure for to-do list.
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //setup constructor for this.
  constructor() {
    super();
    this.state = {
      todoList: todo
    };
  }

  // add toggle feature to the to-do list.
  toggleItem = clickedId => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    // update state with the new array
    this.setState({
      todoList: newTodoList
    });
  };

  // add clear feature to clear the to-do list.
  clearCompleted = event => {
    const clearTodoList = this.state.todoList.filter(item => !item.completed);
    this.setState({
      todoList: clearTodoList
    });
    event.preventDefault();
  };

  // add add new todo function
  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>> Simple To Do.</h1>

        <div className="header">
          <h2>Your Todo</h2>
          <TodoForm addNewItem={this.addNewItem} />
        </div>

        <TodoList
          todo={this.state.todoList}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
