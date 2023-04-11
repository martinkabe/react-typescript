import React from "react";
import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

interface Props {
  onClick: (cnt: number) => void;
}

const Like = ({ onClick }: Props) => {
  const [clickLike, setClickLike] = useState(false);
  let [clickCount, setClickCount] = useState(1);

  const toggle = () => {
    setClickLike(!clickLike);
    clickCount++;
    setClickCount(clickCount);
    onClick(clickCount);
  };

  if (clickLike) return <FcLike color="#ff6b81" size={40} onClick={toggle} />;
  return <FcLikePlaceholder size={40} onClick={toggle} />;
};

export default Like;
