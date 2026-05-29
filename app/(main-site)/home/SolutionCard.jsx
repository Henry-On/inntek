import React from 'react'

function SolutionCard({title, description, img}) {
  return (
    <div className='card solution-card'>
        <div className='wrapper-image'>
            {img}
        </div>
        <div className="wrapper-text">
            <h3 className='card-title'>{title}</h3>
            {description}
        </div>
    </div>
  )
}

export default SolutionCard