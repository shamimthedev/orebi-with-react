import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import Product from "../components/Product";

const SpecialOffers = () => {
  return (
    <>
      <div id="specialOffersSection" className="mb-32">
        <Container>
          <Heading
            as={"h2"}
            text={"Special Offers"}
            className={
              "mb-12 font-primary font-bold text-menuTxtColor text-[40px]"
            }
          />
          <Flex className={"justify-between flex-wrap"}>
            <Product />
            <Product />
            <Product />
            <Product />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default SpecialOffers;
