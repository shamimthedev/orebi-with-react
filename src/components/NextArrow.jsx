import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={"h-16 w-16 rounded-full flex justify-center items-center text-white bg-arrowBg absolute top-1/2 right-0 -translate-y-1/2"}
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </div>
  );
};

export default NextArrow;
