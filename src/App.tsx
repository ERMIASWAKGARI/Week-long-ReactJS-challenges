// App.tsx
import React, { useState } from "react";
import Day1HelloWorld from "./components/Day1HelloWorld";
import Day2ParentComponent from "./components/Day2ParentComponent";
import Day3CounterApp from "./components/Day3CounterApp";

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
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentChallenge(1)}>Day 1</button>
        <button onClick={() => setCurrentChallenge(2)}>Day 2</button>
        <button onClick={() => setCurrentChallenge(3)}>Day 3</button>
      </nav>
      {renderChallenge()}
    </div>
  );
};

export default App;
