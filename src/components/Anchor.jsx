import React from 'react'

const Anchor = ({href, target, children}) => {
  return (
    <a href={href} target={target}>{children}</a>
  )
}

export default Anchor