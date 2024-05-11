import React, { Component } from "react";

class Day4TodoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskInput: "",
    };
  }

  addTask = () => {
    const { taskInput } = this.state;
    if (taskInput.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, taskInput],
        taskInput: "",
      }));
    }
  };

  removeTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
  };

  handleInputChange = (e) => {
    this.setState({ taskInput: e.target.value });
  };

  render() {
    const { tasks, taskInput } = this.state;
    return (
      <div>
        <h2>To-Do List App</h2>
        <input
          type="text"
          value={taskInput}
          onChange={this.handleInputChange}
          placeholder="Enter a new task..."
        />
        <button onClick={this.addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Day4TodoListApp;
