import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={"h-16 w-16 rounded-full flex justify-center items-center text-white bg-arrowBg absolute top-1/2 left-0 -translate-y-1/2 z-10"}
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
};

export default PrevArrow;
