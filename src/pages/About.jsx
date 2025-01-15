import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import Product from "../components/Product";

const About = () => {
  return (
    <>
      <div id="aboutPage">
        <Container>
          <Heading
            as={"h1"}
            text={"About"}
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

export default About;
