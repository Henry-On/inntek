import React from 'react'

const FontAwesomeIcon = ({className="", icon, ...props}) => {
  return (
    <i
     className={`icon ${icon} ${className}`}
     aria-hidden="true"
     {...props}
    ></i>
  )
}

export default FontAwesomeIcon