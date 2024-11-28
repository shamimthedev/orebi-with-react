import React from "react";
import Image from "./Image";
import Headphone from "../assets/headphone.png";
import Badge from "./Badge";
import Heading from "./Heading";
import Text from "./Text";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const Product = () => {
  return (
    <>
      <div id="product" className="relative font-primary text-navColor group">
        <Image imgSrc={Headphone} />
        <Badge badgeText={"New"} className={"absolute top-5 left-5"} />
        <div className="product-details py-7 flex justify-between">
          <Heading
            as={"h4"}
            text={"Basic Crew Neck Tee"}
            className={"font-bold text-menuTxtColor text-xl"}
          />
          <Text as={"span"} text={"$44.00"} />
        </div>
        <div className="product-hover-content py-6 px-7 bg-white absolute bottom-20 left-0 w-full hidden group-hover:block">
          <div className="wish-list mb-5 flex justify-end items-center space-x-4">
            <Text as={"p"} text={"Add to Wish List"} />
            <FaHeart />
          </div>
          <div className="wish-list mb-5 flex justify-end items-center space-x-4">
            <Text as={"p"} text={"Compare"} />
            <FaCodeCompare />
          </div>
          <div className="wish-list flex justify-end items-center space-x-4 font-bold text-menuTxtColor">
            <Text as={"p"} text={"Add to Cart"} />
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
