import React from "react";
import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [clickLike, setClickLike] = useState(false);

  const toggle = () => {
    setClickLike(!clickLike);
    onClick();
  };

  if (clickLike) return <FcLike color="#ff6b81" size={40} onClick={toggle} />;
  return <FcLikePlaceholder size={40} onClick={toggle} />;
};

export default Like;
