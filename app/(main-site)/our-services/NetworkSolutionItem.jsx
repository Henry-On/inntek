import React from 'react'

function NetworkSolutionItem({ image, title, description, keywords }) {
    return (
        <div className="network-solution-item" data-gsap-animate="fade-up" data-gsap-distance="sm">
            <div className='image-container'>
                <img src={image} alt={title} />
            </div>
            <h3 className='solution-title'>{title}</h3>
            <div className='keywords'>
                {keywords.map((keyword, index) => (
                    <span className='keyword' key={index}>{keyword}</span>
                ))}
            </div>
            <p>{description}</p>
        </div>
    )
}

export default NetworkSolutionItem