import React, { Component } from "react";
import ChildComponent1 from "./child-components/ChildComponent1";
import ChildComponent2 from "./child-components/ChildComponent2";

class Day2ParentComponent extends Component {
  render() {
    return (
      <div>
        <h2>This is Day 2 Challenge: Parent Component</h2>
        <ChildComponent1 message="Hello from ChildComponent1!" />
        <ChildComponent2 count={5} />
      </div>
    );
  }
}

export default Day2ParentComponent;
