import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Logo from "../assets/logo.png";
import Menu from "../components/Menu";
import Text from "../components/Text";
import menuBar from "../assets/menu-icon.svg";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router";
import Button from "../components/Button";
import CartPopUp from "../assets/cart-popup.png";
import { NavLink } from "react-router";

const Header = () => {
  let [drop, setDrop] = useState(false);
  let [accDrop, setAccDrop] = useState(false);
  let [cartDrop, setCartDrop] = useState(false);

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
                <Link to={"/"}>
                  <Image imgSrc={Logo} imgAlt={Logo} />
                </Link>
              </div>
              <div className="nav-links">
                <Menu className={"flex items-center space-x-10 text-sm"}>
                  <NavLink
                    to={"/"}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "",
                    })}
                  >
                    <li className="duration-150 hover:font-bold">Home</li>
                  </NavLink>

                  <NavLink
                    to={"/shop"}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "",
                    })}
                  >
                    <li className="duration-150 hover:font-bold">Shop</li>
                  </NavLink>

                  <NavLink
                    to={"/about"}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "",
                    })}
                  >
                    <li className="duration-150 hover:font-bold">About</li>
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "",
                    })}
                  >
                    <li className="duration-150 hover:font-bold">Contact</li>
                  </NavLink>
                  <NavLink
                    to={"/cart"}
                    style={({ isActive }) => ({
                      fontWeight: isActive ? "bold" : "",
                    })}
                  >
                    <li className="duration-150 hover:font-bold">Cart</li>
                  </NavLink>
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
              <div
                className="menu-part flex items-center space-x-3 relative cursor-pointer"
                onClick={() => setDrop(!drop)}
              >
                <Image imgSrc={menuBar} className={"w-5"} />
                <Text
                  as={"p"}
                  text={"Shop by Category"}
                  className={"text-menuTxtColor"}
                />
                {drop && (
                  <div className="nav-links w-64 bg-menuTxtColor absolute top-8 -left-3 z-10">
                    <Menu className={"text-dropDownMenuColor text-sm"}>
                      <NavLink to={"/"}>
                        <li className="px-5 py-4 border-b-2 border-dropDownBorderColor hover:text-white  hover:font-bold">
                          Home
                        </li>
                      </NavLink>

                      <NavLink to={"/shop"}>
                        <li className="px-5 py-4 border-b-2 border-dropDownBorderColor hover:text-white hover:font-bold">
                          Shop
                        </li>
                      </NavLink>

                      <NavLink to={"/about"}>
                        <li className="px-5 py-4 border-b-2 border-dropDownBorderColor hover:text-white  hover:font-bold">
                          About
                        </li>
                      </NavLink>
                      <NavLink to={"/contact"}>
                        <li className="px-5 py-4 hover:text-white hover:font-bold">
                          Contact
                        </li>
                      </NavLink>
                    </Menu>
                  </div>
                )}
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
                <div
                  className="flex items-center space-x-[5px] cursor-pointer relative"
                  onClick={() => setAccDrop(!accDrop)}
                >
                  <FaUser />
                  <IoMdArrowDropdown />
                  {accDrop && (
                    <div className="my-account w-52 text-sm absolute right-0 top-8 z-10">
                      <Button
                        bText={"My Account"}
                        className={
                          "py-4 w-full bg-myAccBg text-white hover:font-bold"
                        }
                      />
                      <Button
                        bText={"Log Out"}
                        className={
                          "py-4 w-full bg-white text-menuTxtColor hover:font-bold"
                        }
                      />
                    </div>
                  )}
                </div>
                <div
                  className="nav-cart relative cursor-pointer"
                  onClick={() => setCartDrop(!cartDrop)}
                >
                  <FaShoppingCart />
                  {cartDrop && (
                    <div className="cart-dropDown absolute right-0 top-8 z-10">
                      <div className="w-96">
                        <Image imgSrc={CartPopUp} className={"w-full"} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
