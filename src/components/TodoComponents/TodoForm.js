import React, { Component } from "react";

//setup the structure for the todo form.
class TodoForm extends Component {
  //Constructor for the state
  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  //handle change for the input value
  handleChange = event => {
    //update state with each keystroke
    this.setState({
      newItem: event.target.value
    });
  };

  // handle submit for the adding new todo
  handleSubmit = event => {
    event.preventDefault();
    this.props.addNewItem(this.state.newItem);
    this.setState({ newItem: "" });
  };

  // setup the render for the form
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
