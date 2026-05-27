import React from 'react'

const FontAwesomeIcon = ({className="", ...props}) => {
  return (
    <i
     className={`icon ${className}`}
     aria-hidden="true"
     {...props}
    ></i>
  )
}

export default FontAwesomeIcon