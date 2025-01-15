import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import Product from "../components/Product";
import Billi from "../assets/billi.png";
import Jhuri from "../assets/jhuri.png";
import SWatch from "../assets/watch.png";
import Ghori from "../assets/ghori.png";

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
          
            <Product imgSrc={Billi} badgeText={"New"}/>
            <Product imgSrc={Jhuri} badgeText={"New"}/>
            <Product imgSrc={SWatch} badgeText={"New"}/>
            <Product imgSrc={Ghori} badgeText={"New"}/>

          </Flex>
        </Container>
      </div>
    </>
  );
};

export default BestSellers;
