import React from 'react'

const Badge = ({className, badgeText}) => {
  return (
    <div className={`px-8 py-3 bg-black text-white font-primary font-bold text-sm ${className}`}>{badgeText}</div>
  )
}

export default Badge