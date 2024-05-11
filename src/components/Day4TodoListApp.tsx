// Day4TodoListApp.tsx
import React, { useState } from "react";

const Day4TodoListApp: React.FC = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState<string[]>([]);
  // State to manage the input field for adding tasks
  const [taskInput, setTaskInput] = useState<string>("");

  // Function to handle adding a new task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput("");
    }
  };

  // Function to handle removing a task
  const removeTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>To-Do List App</h2>
      {/* Input field for adding new tasks */}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a new task..."
      />
      {/* Button to add a new task */}
      <button onClick={addTask}>Add Task</button>
      {/* Display the list of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            {/* Button to remove a task */}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Day4TodoListApp;
