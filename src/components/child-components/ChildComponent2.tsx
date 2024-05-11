import React from "react";

const ChildComponent2: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div
      style={{
        backgroundColor: "#D8E3E7",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      Count: {count} from ChildComponent2!
    </div>
  );
};

export default ChildComponent2;
