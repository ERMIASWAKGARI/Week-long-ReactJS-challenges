import React, { useState } from "react";
import styled from "styled-components";
import Day1HelloWorld from "./components/Day1HelloWorld";
import Day2ParentComponent from "./components/Day2ParentComponent";
import Day3CounterApp from "./components/Day3CounterApp";
import Day4TodoListApp from "./components/Day4TodoListApp";
import Day5LoginForm from "./components/Day5LoginForm";
import Day6StyledTodoList from "./components/Day6StyledTodoList";
import Day7CounterApp from "./components/Day7CounterApp";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Nav = styled.nav`
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ChallengeContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const App: React.FC = () => {
  const [currentChallenge, setCurrentChallenge] = useState<number | null>(null);

  const renderChallenge = () => {
    switch (currentChallenge) {
      case 1:
        return <Day1HelloWorld />;
      case 2:
        return <Day2ParentComponent />;
      case 3:
        return <Day3CounterApp />;
      case 4:
        return <Day4TodoListApp />;
      case 5:
        return <Day5LoginForm />;
      case 6:
        return <Day6StyledTodoList />;
      case 7:
        return <Day7CounterApp />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Nav>
        <Button onClick={() => setCurrentChallenge(1)}>Day 1</Button>
        <Button onClick={() => setCurrentChallenge(2)}>Day 2</Button>
        <Button onClick={() => setCurrentChallenge(3)}>Day 3</Button>
        <Button onClick={() => setCurrentChallenge(4)}>Day 4</Button>
        <Button onClick={() => setCurrentChallenge(5)}>Day 5</Button>
        <Button onClick={() => setCurrentChallenge(6)}>Day 6</Button>
        <Button onClick={() => setCurrentChallenge(7)}>Day 7</Button>
      </Nav>
      <ChallengeContainer>{renderChallenge()}</ChallengeContainer>
    </Container>
  );
};

export default App;
