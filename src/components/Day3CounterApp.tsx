// Day3CounterApp.tsx
import React, { useState } from "react";

const Day3CounterApp: React.FC = () => {
  // State to manage the counter value
  const [counter, setCounter] = useState<number>(0);

  // Function to handle incrementing the counter
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Function to handle decrementing the counter
  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <p>Counter: {counter}</p>
      {/* Button to increment counter */}
      <button onClick={incrementCounter}>+</button>
      {/* Button to decrement counter */}
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Day3CounterApp;
