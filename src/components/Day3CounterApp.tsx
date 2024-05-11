import React, { Component } from "react";

class Day3CounterApp extends Component {
  constructor(props) {
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
      <div>
        <h2>Counter App</h2>
        <p>Counter: {counter}</p>
        {/* Button to increment counter */}
        <button onClick={this.incrementCounter}>+</button>
        {/* Button to decrement counter */}
        <button onClick={this.decrementCounter}>-</button>
      </div>
    );
  }
}

export default Day3CounterApp;
