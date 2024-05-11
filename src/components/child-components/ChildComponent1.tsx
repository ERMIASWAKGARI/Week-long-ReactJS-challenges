import React from "react";

const ChildComponent1: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: "#e0e0e0",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {message}
    </div>
  );
};

export default ChildComponent1;
