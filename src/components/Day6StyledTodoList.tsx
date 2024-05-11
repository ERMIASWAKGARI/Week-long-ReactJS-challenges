// Day6StyledTodoList.tsx
import React, { useState } from "react";
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
const Day6StyledTodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput("");
    }
  };

  const removeTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>To-Do List</Title>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task..."
        />
        <Button onClick={addTask}>Add Task</Button>
      </Form>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <span>{task}</span>
            <Button onClick={() => removeTask(index)}>Remove</Button>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default Day6StyledTodoList;
