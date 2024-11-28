import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Image from "../components/Image";
import numberTwo from '../assets/2-icon.svg'
import Truck from '../assets/truck-icon.svg'
import returnPolicy from '../assets/return-policy-icon.svg'

const Policy = () => {
  return (
    <>
      <div id="policySection" className="py-6 mb-32 border-borderColor border-b">
        <Container>
          <Flex className={'justify-between items-center font-primary text-policyColor'}>
            <div className="policy-first-part flex items-center space-x-4">
              <Image imgSrc={numberTwo}/>
              <Text as={'span'} text={'Two years warranty'}/>
            </div>
            <div className="policy-second-part flex items-center space-x-4">
              <Image imgSrc={Truck}/>
              <Text as={'span'} text={'Free shipping'}/>
            </div>
            <div className="policy-third-part flex items-center space-x-4">
              <Image imgSrc={returnPolicy}/>
              <Text as={'span'} text={'Return policy in 30 days'}/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Policy;
