import React from "react";

interface Props {
  catrItems: string[];
  onClear: () => void;
}

const Cart = ({ catrItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {catrItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
