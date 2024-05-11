// ChildComponent1.tsx
import React from "react";

const ChildComponent1: React.FC<{ message: string }> = ({ message }) => {
  return <div>{message}</div>;
};

export default ChildComponent1;
