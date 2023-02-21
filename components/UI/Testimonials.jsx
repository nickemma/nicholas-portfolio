import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import classes from '../../styles/testimonials.module.css';
import SectionSubtitle from './SectionSubtitle';

import { data } from '../data/data';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Testimonials = () => {
  return (
    <section id="testimonials" className={`${classes.testimonials}`}>
      <div className={`${classes.testimony}`}>
        <SectionSubtitle subtitle="Testimonials" />
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, key) => (
          <SwiperSlide key={key} className={`${classes.swiper_slide}`}>
            <img src={item.image} alt={item.name} />
            <div className={`${classes.divide}`}>
              <h3 className={`${classes.text_lead}`}>{item.name}</h3>
              <div className={`${classes.icons}`}>
                <h4>{item.location}</h4>
              </div>
            </div>
            <p className={`${classes.text}`}>{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
