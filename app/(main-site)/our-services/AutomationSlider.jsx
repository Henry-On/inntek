"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function AutomationSlider() {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            // centeredSlides={true}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            // slidesPerView={1.2}
            // spaceBetween={20}
            // breakpoints={{
            //     900: {
            //         slidesPerView: 3,
            //     },
            // }}
        >
            <SwiperSlide><img src="/images/automation-1.webp" alt="automation-image-1" /></SwiperSlide>
            <SwiperSlide><img src="/images/automation-2.webp" alt="automation-image-2" /></SwiperSlide>
            <SwiperSlide><img src="/images/automation-3.webp" alt="automation-image-3" /></SwiperSlide>
            <SwiperSlide><img src="/images/automation-4.webp" alt="automation-image-4" /></SwiperSlide>
            <SwiperSlide><img src="/images/automation-5.webp" alt="automation-image-5" /></SwiperSlide>
        </Swiper>
    );
}