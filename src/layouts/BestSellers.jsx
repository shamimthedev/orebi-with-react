import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import Product from "../components/Product";

const BestSellers = () => {
  return (
    <>
      <div id="bestSellersSection" className="mb-32">
        <Container>
          <Heading
            as={"h2"}
            text={"Our Bestsellers"}
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

export default BestSellers;