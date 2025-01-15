import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import Product from "../components/Product";

const Contact = () => {
  return (
    <>
      <div id="contactPage">
        <Container>
          <Heading
            as={"h1"}
            text={"Contact"}
            className={"font-primary font-bold text-5xl text-menuTxtColor"}
          />
          <div id="products">
            <Flex className={"space-x-12"}>
              <Product />
              <Product />
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
