import React from "react";

interface Props {
  onChange: () => void;
}

const GameButton = ({ onChange }: Props) => {
  return (
    <div>
      <button onClick={onChange}>Change Name</button>
    </div>
  );
};

export default GameButton;
