import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import AdsOne from "../assets/ad-one.png";
import AdsTwo from "../assets/ad-two.png";
import AdsThree from "../assets/ad-three.png";

const Ads = () => {
  return (
    <>
      <div id="adsSection" className="mb-32">
        <Container>
          <Flex className={'justify-between'}>
            <div className="ads-one">
              <Image imgSrc={AdsOne}/>
            </div>
            <div className="ads-two ml-10 flex flex-col justify-between">
              <Image imgSrc={AdsTwo} className={'mb-10'}/>
              <Image imgSrc={AdsThree}/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Ads;
