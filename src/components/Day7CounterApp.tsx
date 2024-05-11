import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 20px;
`;

const Counter = styled.p`
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:first-child {
    margin-right: 12px;
  }
`;

const Day7CounterApp = () => {
  // useState hook to manage counter state
  const [counter, setCounter] = useState(0);

  // Function to handle incrementing the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Function to handle decrementing the counter
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <Container>
      <Title>Counter App: Using class component </Title>
      <Counter> Count: {counter}</Counter>
      {/* Button to decrement counter */}
      <Button onClick={decrementCounter}>-</Button>
      {/* Button to increment counter */}
      <Button onClick={incrementCounter}>+</Button>
    </Container>
  );
};

export default Day7CounterApp;
