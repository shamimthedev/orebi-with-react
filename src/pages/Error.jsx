import React from 'react'
import Image from '../components/Image'
import ErrorAni from '../assets/error.gif'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    
    <>
    <Link to={'/'}>
    <Image imgSrc={ErrorAni} className={'w-[1600px]'}/>
    </Link>
    </>
    
  )
}

export default Error