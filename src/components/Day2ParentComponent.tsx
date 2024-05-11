import React from "react";
import styled from "styled-components";
import ChildComponent1 from "./child-components/ChildComponent1";
import ChildComponent2 from "./child-components/ChildComponent2";

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Day2ParentComponent = () => {
  return (
    <Container>
      <Title>This is Day 2 Challenge: Parent Component</Title>
      <ChildComponent1 message="Hello from ChildComponent1!" />
      <ChildComponent2 count={5} />
    </Container>
  );
};

export default Day2ParentComponent;
