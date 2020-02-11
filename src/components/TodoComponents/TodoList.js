// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

//import item from the todo
import Item from "./Todo";

//setup the structure for the to-do list
const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todo.map(item => (
        <Item key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-button" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
