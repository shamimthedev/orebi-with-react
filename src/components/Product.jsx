
import Image from "./Image";
import Badge from "./Badge";
import Heading from "./Heading";
import Text from "./Text";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";

const Product = ({imgSrc, badgeText, className, onClick}) => {
  return (
    <>
      <div id="product" className={`relative font-primary text-navColor group  ${className}`}>
        <Image imgSrc={imgSrc} className={'w-full'}/>
        <Badge badgeText={badgeText} className={"absolute top-5 left-5"} />
        <div className="product-details py-7 flex justify-between">
          <Heading
            as={"h4"}
            text={"Basic Crew Neck Tee"}
            className={"font-bold text-menuTxtColor text-xl"}
          />
          <Text as={"span"} text={"$44.00"} />
        </div>
        <div className="product-hover-content py-6 px-7 bg-white absolute bottom-20 left-0 z-50 w-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
          <div className="wish-list mb-5 flex justify-end items-center space-x-4 duration-150 hover:text-menuTxtColor hover:font-bold cursor-pointer">
            <Text as={"p"} text={"Add to Wish List"} />
            <FaHeart />
          </div>
          <div className="wish-list mb-5 flex justify-end items-center space-x-4 duration-150 hover:text-menuTxtColor hover:font-bold cursor-pointer">
            <Text as={"p"} text={"Compare"} />
            <FaCodeCompare />
          </div>
          <div className="add-cart flex justify-end items-center space-x-4 duration-150 hover:text-menuTxtColor hover:font-bold cursor-pointer" onClick={onClick}>
            <Text as={"p"} text={"Add to Cart"} />
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
