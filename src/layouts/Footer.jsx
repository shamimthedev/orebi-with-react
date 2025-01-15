import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import Menu from "../components/Menu";
import Text from "../components/Text";
import Image from "../components/Image";
import fLogo from "../assets/fLogo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div id="footerSection" className="pt-14 pb-16 bg-headerBg">
        <Container>
          <Flex className={"font-primary"}>
            <div className="footer-content flex space-x-36">
              <div className="footer-menu">
                <Heading
                  as={"h3"}
                  text={"MENU"}
                  className={"mb-4 font-bold text-menuTxtColor"}
                />
                <Menu className={"flex text-policyColor flex-col space-y-[6px]"}>
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Journal</li>
                </Menu>
              </div>
              <div className="footer-shop">
                <Heading
                  as={"h3"}
                  text={"SHOP"}
                  className={"mb-4 font-bold text-menuTxtColor"}
                />
                <Menu className={"flex text-policyColor flex-col space-y-[6px]"}>
                  <li>Category 1</li>
                  <li>Category 2</li>
                  <li>Category 3</li>
                  <li>Category 4</li>
                  <li>Category 5</li>
                </Menu>
              </div>
              <div className="footer-help">
                <Heading
                  as={"h3"}
                  text={"HELP"}
                  className={"mb-4 font-bold text-menuTxtColor"}
                />
                <Menu className={"flex text-policyColor flex-col space-y-[6px]"}>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Special E-shop</li>
                  <li>Shipping</li>
                  <li>Secure Payments</li>
                </Menu>
              </div>
              <div className="footer-help">
                <Heading
                  as={"h3"}
                  text={"(052) 611-5711"}
                  className={"font-bold text-menuTxtColor"}
                />
                <Heading
                  as={"h3"}
                  text={"company@domain.com"}
                  className={"mb-4 font-bold text-menuTxtColor"}
                />
                <Text
                  as={"p"}
                  text={"575 Crescent Ave. Quakertown, PA 18951"}
                  className={" text-policyColor"}
                />
              </div>
            </div>
            <div className="footer-logo ml-64">
              <Image imgSrc={fLogo} className={'w-[120px]'}/>
            </div>
          </Flex>
        </Container>
      </div>
      <div id="footer-copyright" className="pb-14 bg-headerBg">
        <Container>
          <div className="footer-icons-copyright flex justify-between items-center">
            <div className="f-icons flex space-x-6">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
            <div className="f-copyright">
              <Text
                as={"p"}
                text={"2020 Orebi Minimal eCommerce Figma Template by Adveits"}
                className={" text-policyColor"}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
