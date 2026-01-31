import React from 'react'
import SectionIcon from '../SectionIcon'
const Testimonials = ({ heading, description, ...props }) => {
  const defaultText = "Our customers, Our gems. Some of our clients has some nice things to say about us"
  const subText = description || defaultText
  return (
    <div className='testimonials' {...props}>
      <div className="content">
        <div className='container-top'>
          <h3 className='section-title'>{heading || "What People think of Us"}</h3>
          <p>{subText}</p>
          <SectionIcon
            icon="far fa-smile"
            backgroundColor="#2c790035"
            style={{color:"#256600"}}
          />
        </div>
        <div className="viewport hide-x-scrollbar">
          <div className='wrapper-testimonies'>
            <UserTestimony
              name="User 1"
              comment="centric has not failed us in any way. Some of our clients has some nice things"
              image="/images/techguy.png"
            />
            <UserTestimony
              name="User 2"
              comment="Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results."
              image="/images/shape-bi-square.png"
            />
            <UserTestimony
              name="User 3"
              comment="centric has not failed us in any way. Some of our clients has some nice things"
              image="/images/techguy.png"
            />
            <UserTestimony
              name="User 4"
              comment="Lorem ipsum dolor sit amet. Some of our clients has some nice things"
              image="/images/techguy.png"
            />
            <UserTestimony
              name="User 5"
              comment="centric has not failed us in any way. Some of our clients has some nice things"
              image="/images/techguy.png"
            />
          </div>
        </div>
        <div className="carousel-indicators"></div>
      </div>
    </div>
  )
}

export const UserTestimony = ({ name, comment, image, ...props }) => {
  return (
    <div className='item-container' {...props} >
      <div className='card'>

        <span className="user-rating">💛💛</span>
        <div className="user-comment">
          {comment}
        </div>
        <div className='user'>
          <div className="image-wrapper">
            <img src={image} />
          </div>
          <span style={{ opacity: 0.65 }}>{name}</span>
        </div>

      </div>
    </div>
  )
}

export default Testimonials
