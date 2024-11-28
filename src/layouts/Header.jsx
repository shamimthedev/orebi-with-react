import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Logo from "../assets/logo.png";
import Menu from "../components/Menu";
import Text from "../components/Text";
import menuBar from "../assets/menu-icon.svg";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div id="headerSection">
        <div id="topHeader" className="py-8">
          <Container>
            <Flex
              className={
                "justify-between items-center font-primary text-navColor"
              }
            >
              <div className="nav-logo">
                <Image imgSrc={Logo} imgAlt={Logo} />
              </div>
              <div className="nav-links">
                <Menu className={"items-center space-x-10 text-sm"}>
                  <li className="font-bold">Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Journal</li>
                </Menu>
              </div>
              <div className="nav-lang">
                <Flex className={"space-x-5"}>
                  <Text as={"p"} text={"EN"} className={"font-bold"} />
                  <Text as={"p"} text={"RU"} />
                </Flex>
              </div>
            </Flex>
          </Container>
        </div>
        <div id="lowerHeader" className="py-6 bg-headerBg">
          <Container>
            <Flex
              className={"font-primary text-sm justify-between items-center"}
            >
              <div className="menu-part flex items-center space-x-3">
                <Image imgSrc={menuBar} className={"w-5"} />
                <Text
                  as={"p"}
                  text={"Shop by Category"}
                  className={"text-menuTxtColor"}
                />
              </div>
              <div className="search-bar w-[600px] bg-white relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="w-full py-4 px-5 border-none outline-none text-inputColor"
                />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
              <div className="header-icons flex items-center space-x-10 text">
                <div className="flex items-center space-x-[5px]">
                  <FaUser />
                  <IoMdArrowDropdown />
                </div>
                <FaShoppingCart />
              </div>
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
