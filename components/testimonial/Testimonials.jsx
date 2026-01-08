import React from 'react'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className="content">
        <div className='max-width-text text-center'>
          <h3 className='section-title'>What People think of Us</h3>
          We value our customers, and being customer centric has not failed us in any way. Some of our clients has some nice things to say about us
        </div>
        <div className='wrapper-testimonies'>
          <UserTestimony
            name="Peter Osagie"
            comment="centric has not failed us in any way. Some of our clients has some nice things"
            image="/images/techguy.png"
          />
          <UserTestimony
            name="James Ibori Omoka"
            comment="Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results."
            image="/images/shape-bi-square.png"
          />
          <UserTestimony
            name="Peter Osagie"
            comment="centric has not failed us in any way. Some of our clients has some nice things"
            image="/images/techguy.png"
          />
        </div>

        <div className="indicators">
          <span className="indicator"></span>
          <span className="indicator active"></span>
          <span className="indicator"></span>
        </div>
      </div>
    </div>
  )
}

export const UserTestimony = ({name, comment, image, ...props}) => {
  return (
    <div className='item-container' {...props} >
      <div className='card'>
        <div className="image-wrapper">
          <img src={image} />
        </div>
        <span className="user-rating">💛💛</span>
        <div className="user-comment">
          {comment}
        </div>
        <span style={{opacity:0.65}}>{name}</span>
      </div>
    </div>
  )
}

export default Testimonials
