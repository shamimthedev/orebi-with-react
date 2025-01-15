import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { useState} from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import Text from '../components/Text';

const Category = ({ paraOne, paraTwo, paraThree, paraFour, paraFive, paraSix }) => {
  
  const [hidden, setHidden] = useState(false);

  return (
  <>
   <div className='bg-CategoryBG py-[25px] border-BorderColor border-y'>
    <Container className={'max-w-headerContainer'}>
     <Flex>
       <Flex className={'w-[20%] gap-2 items-center'}>
              <OutsideClickHandler onOutsideClick={() => { setHidden(false); }}>
                <Flex className={'items-center relative'}>
                  <HiMenuAlt2 className='cursor-pointer' onClick={() => setHidden(!hidden)} />
                  <div onClick={() => setHidden(!hidden)}>
                  <Heading as={'h4'} className={'font-dms text-[14px] pl-2 text-TextHColor cursor-pointer'} text={paraOne} />
                  </div>
                  {hidden && (
                  <div className='bg-white p-4 w-[230px] absolute top-[30px] rounded-md' >
                  <ul className='font-dms text-[16px] text-TextColor'>
                    <li className='border-b py-5 bottom-BorderInfoColor' ><Text text={paraTwo}/></li>
                    <li className='border-b py-5 bottom-BorderInfoColor' ><Text text={paraThree}/></li>
                    <li className='border-b py-5 bottom-BorderInfoColor' ><Text text={paraFour}/></li>
                    <li className='border-b py-5 bottom-BorderInfoColor' ><Text text={paraFive}/></li>
                    <li className='border-b py-5 bottom-BorderInfoColor' ><Text text={paraSix}/></li>
                  </ul>
                  </div>
                 )}
                </Flex>
              </OutsideClickHandler>
            </Flex>
            <div className='w-[60%] relative'>
              <input className='w-full p-3' type="text" placeholder='Search Products'/><FaSearch  className='absolute top-[50%] translate-y-[-50%] right-4'/>
            </div>
            <Flex className={'w-[20%] items-center justify-end'}>
              <FaUser className='mr-1'/>
              <TiArrowSortedDown className='mr-9' />
              <FaShoppingCart />
          </Flex>
        </Flex>
      </Container>
    </div>
   </>
 )
}

export default Category