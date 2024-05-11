import React, { Component } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
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
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

// Component
class Day6StyledTodoList extends Component {
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
      <Container>
        <Title>To-Do List</Title>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            value={taskInput}
            onChange={this.handleInputChange}
            placeholder="Enter a new task..."
          />
          <Button onClick={this.addTask}>Add Task</Button>
        </Form>
        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem key={index}>
              <span>{task}</span>
              <Button onClick={() => this.removeTask(index)}>Remove</Button>
            </TaskItem>
          ))}
        </TaskList>
      </Container>
    );
  }
}

export default Day6StyledTodoList;
