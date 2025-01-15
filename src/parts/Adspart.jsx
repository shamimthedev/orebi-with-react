import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'

const Adspart = ({ imgSrc1, imgSrc2, imgSrc3 }) => {
  return (
    <>
      {/* Ads Part Start */}
      <div className='py-[70px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex className={'justify-between'}>
            <div className='w-[49%]'>
            <img src={imgSrc1} alt={'ad_1'} />
            </div>
            <div className='w-[49%]'>
              <img src={imgSrc2} alt={'ad_2'} />
              <img src={imgSrc3} alt={'ad_3'} className='mt-[31px]' />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Ads Part End */}
    </>
  )
}

export default Adspart