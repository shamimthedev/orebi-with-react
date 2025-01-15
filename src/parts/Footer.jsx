import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Footertexts from '../components/Footertexts'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (

    <div className='bg-CategoryBG py-[60px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'justify-between'}>
            <div className='w-[130px]'>
              <Footertexts
                Fhead={'MENU'}
                Pone={'Home'}
                Ptwo={'Shop'}
                Pthree={'About'}
                Pfour={'Contact'}
                Pfive={'Journal'}
              />
            </div>
            <div className='w-[130px]'>
              <Footertexts
                Fhead={'SHOP'}
                Pone={'Category 1'}
                Ptwo={'Category 2'}
                Pthree={'Category 3'}
                Pfour={'Category 4'}
                Pfive={'Category 5'}
              />
            </div>
            <div className='w-[130px]'>
             <Footertexts
                Fhead={'HELP'}
                Pone={'Privacy Policy'}
                Ptwo={'Terms & Conditions'}
                Pthree={'Special E-shop'}
                Pfour={'Shipping'}
                Pfive={'Secure Payments'}
              />
            </div>
            <div className='w-[260px]'>
              <Footertexts
                Fhead={'(052) 611-5711 company@domain.com'}
                Pone={'575 Crescent Ave. Quakertown, PA 18951'}
              />
            </div>
            <div className='w-[200px]'>
              <Image imgSrc={Logo} imgAlt={Logo}/>
            </div>
          </Flex>
          <Flex className={'items-center justify-between pt-[70px]'}>
            <Flex className='w-[95px] justify-between pt-[70px]'>
              <FaFacebookF /> <FaLinkedinIn /> <FaInstagram />
            </Flex>
            <div className='w-[390px]'>
              <Footertexts
                Psix={'2020 Orebi Minimal eCommerce Figma Template by Adveits'}
              />
            </div>
          </Flex>
        </Container>
    </div>
    
  )
}

export default Footer