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
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #007bff; /* Blue border */
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff5722; /* Orange background */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19; /* Darker orange on hover */
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

// Component
const Day6StyledTodoList: React.FC = () => {
  const [tasks, setTasks] = useState<{ task: string; details: string }[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");
  const [taskDetailsInput, setTaskDetailsInput] = useState<string>("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { task: taskInput, details: taskDetailsInput },
      ]);
      setTaskInput("");
      setTaskDetailsInput("");
    }
  };

  const removeTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>To-Do List: Applied other styles</Title>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task..."
        />
        {/* Additional input field for task details */}
        <Input
          type="text"
          value={taskDetailsInput}
          onChange={(e) => setTaskDetailsInput(e.target.value)}
          placeholder="Enter task details..."
        />
        <Button onClick={addTask}>Add Task</Button>
      </Form>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <div>
              <div>{task.task}</div>
              <div>{task.details}</div>
            </div>
            <Button onClick={() => removeTask(index)}>Remove</Button>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default Day6StyledTodoList;
