// ChildComponent2.tsx
import React from "react";

const ChildComponent2: React.FC<{ count: number }> = ({ count }) => {
  return <div>Count: {count} from ChildComponent2!</div>;
};

export default ChildComponent2;
