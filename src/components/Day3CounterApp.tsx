import React, { Component } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Counter = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
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

class Day3CounterApp extends Component {
  constructor(props: object) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // Function to handle incrementing the counter
  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  // Function to handle decrementing the counter
  decrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  render() {
    const { counter } = this.state;
    return (
      <Container>
        <Title>Counter App</Title>
        <Counter>Counter: {counter}</Counter>
        {/* Button to decrement counter */}
        <Button onClick={this.decrementCounter}>-</Button>
        {/* Button to increment counter */}
        <Button onClick={this.incrementCounter}>+</Button>
      </Container>
    );
  }
}

export default Day3CounterApp;
