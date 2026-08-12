"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { SITE_NAME } from "@/lib/constants";
import FontAwesomeIcon from "../FontAwesomeIcon";


export default function TestimonialCarousel() {
   return (
      <Swiper
         modules={[Pagination, Autoplay]}
         loop={true}
         autoplay={{ delay: 4000 }}
         pagination={{ clickable: true }}
         slidesPerView={1.2}
         spaceBetween={0}
         breakpoints={{
            900: {
               slidesPerView: 3,
            },
         }}
      >
         <SwiperSlide>
            <UserTestimony
               name="Christina Rose"
               comment={`Working with ${SITE_NAME} has been transformative for our business. Their innovative solutions and dedicated support have exceeded our expectations.`}
            />
         </SwiperSlide>
         <SwiperSlide>
            <UserTestimony
               name="User 2"
               comment={`${SITE_NAME}'s expertise and professionalism are unmatched. They delivered cutting-edge technology solutions that streamlined our operations significantly.`}
            />
         </SwiperSlide>
         <SwiperSlide>
            <UserTestimony
               name="Henry | Software Engineer"
               comment={`The team at ${SITE_NAME} consistently delivers exceptional results. Working at this Organisation has strengthen my career, the attention to detail and commitment to quality product delivery.`}
            />
         </SwiperSlide>
         <SwiperSlide>
            <UserTestimony
               name="Udoh Hunpegan"
               comment={`${SITE_NAME} transformed our digital presence with their innovative approach. Their responsive team and technical excellence have been invaluable to our growth.`}
            />
         </SwiperSlide>
         <SwiperSlide>
            <UserTestimony
               name="Josephine O. | CEO Kingslingua"
               comment="Outstanding service from start to finish. The solutions are reliable, scalable, and perfectly aligned with our business objectives and vision."
            />
         </SwiperSlide>
      </Swiper>
   );
}

export const UserTestimony = ({ name, comment, image, ...props }) => {

   const userImage = image ? <img src={image} alt={`${name}'s profile`} /> : <FontAwesomeIcon className="user-icon fa-solid fa-user" />;


   return (
      <div className='item-container' {...props} >
         <div className='card'>

            <span className="user-rating fas fa-quote-left"></span>
            <div className="user-comment">
               {`${comment}`}
            </div>
            <div className='user'>
               <div className="image-wrapper">
                  <img src={image ? image : "/images/profile-avatar.png"} alt={`${name}'s profile`} />
               </div>
               <span style={{ opacity: 0.75 }}>{name}</span>
            </div>

         </div>
      </div>
   )
}