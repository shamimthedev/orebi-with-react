import React from 'react'
import Container from '../components/Container'
import Anchor from '../components/Anchor'

const Adspart2 = ({ className, href, target}) => {
  return (
    <>
    {/* Ads Part 2 Banner Start */}
      <div className='py-[70px]'>
        <Container className={'max-w-headerContainer'}>
          <Anchor href={href} target={target}>
          <div className={`bg-center bg-cover bg-no-repeat py-[140px] ${className}`}></div>
          </Anchor>
        </Container>
      </div>
      {/* Ads Part 2 Banner End */}
    </>
  )
}

export default Adspart2