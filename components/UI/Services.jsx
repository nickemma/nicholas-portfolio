import React, { useEffect } from 'react';
import SectionSubtitle from './SectionSubtitle';
import AOS from 'aos';
import classes from '../../styles/services.module.css';
import ServicesItem from './ServicesItem';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'linear' });
    AOS.refresh();
  }, []);
  return (
    <section id="services" className={`${classes.services}`}>
      <div className={`${classes.box_container}`}>
        <div className={`${classes.icons}`}>
          <div className={`${classes.items}`}>
            <div className={`${classes.item1}`} data-aos="fade-down">
              <ServicesItem title="Frontend Development" icon="ri-apps-line" />
            </div>
            <div className={`${classes.item2}`} data-aos="fade-up">
              <ServicesItem
                title="Backend Development"
                icon="ri-computer-line"
              />
            </div>
          </div>
          <div className={`${classes.item3}`} data-aos="fade-right">
            <ServicesItem
              title="Full-Stack Development"
              icon="ri-code-s-slash-line"
            />
          </div>
        </div>
        <div className={`${classes.content_service}`} data-aos="fade-left">
          <SectionSubtitle subtitle="What I do" />
          <h3 data-aos="flip-left" data-aos-duration="1500">
            Better Design,
          </h3>
          <h3 data-aos="fade-down" data-aos-duration="1500">
            Better Experience
          </h3>
          <p data-aos="zoom-in" data-aos-duration="1500">
            I&apos;m building scalable web applications, Mobile apps, and
            beautiful websites for companies..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
