import React from 'react'

function IndustryList({title, description, icon}) {
  const iconWithAria = React.isValidElement(icon) ? React.cloneElement(icon, { 'aria-hidden': 'true' }) : icon;
  return (
    <div className='industry-item'>
        <div className='no-text'>
            <span className="wrapper-icon">
              {iconWithAria}
            </span>
            <div className="decoration-line"></div>
        </div>
        <div className="wrapper-text">
            <h3 className='item-heading'>{title}</h3>
            {description}
        </div>
    </div>
  )
}

export default IndustryList