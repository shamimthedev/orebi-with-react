import React from 'react'

const Paragraph = (props) => {
  return (
  <p className={'font-dms text-[16px] hover:text-TextHColor hover:font-bold text-TextColor'}>{props.text}</p> 
  )
}

export default Paragraph