import React from 'react'

function IndustryList({
  className,
  title,
  description,
  icon,
  iconBackgroundColor,
  backgroundColor,
  ...props
}) {
  const iconWithAria = React.isValidElement(icon)
    ? React.cloneElement(icon, { 'aria-hidden': 'true' })
    : icon;

  return (
    <div
      className={`industry-item ${className || ''}`.trim()}
      {...props}
    >
      <div className="no-text" aria-hidden="true">
        <span className="wrapper-icon" style={{ backgroundColor: iconBackgroundColor }}>
          {iconWithAria}
        </span>
        <div className="decoration-line" aria-hidden="true"></div>
      </div>
      <div className="wrapper-text">
        <h3 className="item-heading">{title}</h3>
        {description}
      </div>
    </div>
  );
}

export default IndustryList