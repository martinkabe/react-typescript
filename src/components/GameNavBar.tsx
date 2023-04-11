import React from "react";

interface Props {
  name: string;
}

const GameNavBar = ({ name }: Props) => {
  return (
    <>
      <div>
        <p>Name is {name}</p>
      </div>
    </>
  );
};

export default GameNavBar;
