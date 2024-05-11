import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:first-child {
    margin-right: 10px;
  }
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

class Day4TodoListApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskInput: "",
      taskDetailsInput: "", // Additional input field for task details
    };
  }

  addTask = () => {
    const { taskInput, taskDetailsInput } = this.state;
    if (taskInput.trim() !== "") {
      this.setState((prevState) => ({
        tasks: [
          ...prevState.tasks,
          { task: taskInput, details: taskDetailsInput }, // Store task details as an object
        ],
        taskInput: "",
        taskDetailsInput: "",
      }));
    }
  };

  removeTask = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((_, i) => i !== index),
    }));
  };

  handleInputChange = (e, inputType) => {
    this.setState({ [inputType]: e.target.value });
  };

  render() {
    const { tasks, taskInput, taskDetailsInput } = this.state;
    return (
      <Container>
        <Title>To-Do List App</Title>
        <Input
          type="text"
          value={taskInput}
          onChange={(e) => this.handleInputChange(e, "taskInput")}
          placeholder="Enter a new task..."
        />
        {/* Additional input field for task details */}
        <Input
          type="text"
          value={taskDetailsInput}
          onChange={(e) => this.handleInputChange(e, "taskDetailsInput")}
          placeholder="Enter task details..."
        />
        <Button onClick={this.addTask}>Add Task</Button>
        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem key={index}>
              <div>
                <div>{task.task}</div>
                <div>{task.details}</div>
              </div>
              <Button onClick={() => this.removeTask(index)}>Remove</Button>
            </TaskItem>
          ))}
        </TaskList>
      </Container>
    );
  }
}

export default Day4TodoListApp;
