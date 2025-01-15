import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaVanShuttle } from "react-icons/fa6";
import { FaUndoAlt } from "react-icons/fa";

const Information = ({paraOne, paraTwo, paraThree }) => {
  return (
    <>
      {/* Information Part Start */}
      <div className='py-[25px] mb-[70px] border-BorderInfoColor border-y'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={"justify-between"}>
          <Flex className={'items-center gap-2'}>
            <PiNumberTwoBold className='text-[25px]'/> <Heading as={'h5'} text={paraOne} className={'font-dms text-[16px] text-InformationColor '}/>
          </Flex>
          <Flex className={'items-center gap-4'}>
            <FaVanShuttle className='text-[25px]'/> <Heading as={'h5'} text={paraTwo} className={'font-dms text-[16px] text-InformationColor '}/>
          </Flex>
          <Flex className={'items-center gap-4'}>
            <FaUndoAlt className='text-[25px]'/> <Heading as={'h5'} text={paraThree} className={'font-dms text-[16px] text-InformationColor '}/>
          </Flex>
        </Flex>
        </Container>
      </div>
      {/* Information Part End */}
    </>
  )
}

export default Information