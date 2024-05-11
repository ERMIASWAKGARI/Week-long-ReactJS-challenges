import React, { useState } from "react";

const Day7TodoListApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput("");
    }
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  return (
    <div>
      <h2>To-Do List App</h2>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a new task..."
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Day7TodoListApp;
