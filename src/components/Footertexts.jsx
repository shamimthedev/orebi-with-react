import React from 'react'
import Heading from './Heading';

const Footertexts = ({Fhead, Pone, Ptwo, Pthree, Pfour, Pfive, Psix}) => {
  return (
    <>
    <Heading as={'h4'} text={Fhead} className={'font-dms font-bold text-[16px] text-TextHColor pb-[15px]'} />
    <Heading as={'p'} text={Pone} className={'font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Ptwo} className={'font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Pthree} className={'font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Pfour} className={'font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Pfive} className={'font-dms text-[14px] text-InformationColor py-[5px]'} />
    <Heading as={'p'} text={Psix} className={'font-dms text-[14px] text-InformationColor'} />
      
    </>
  )
}

export default Footertexts