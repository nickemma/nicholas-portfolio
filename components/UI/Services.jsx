import React, { useEffect } from 'react';
import SectionSubtitle from './SectionSubtitle';
import AOS from 'aos';
import classes from '../../styles/services.module.css';
import ServicesItem from './ServicesItem';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'linear' });
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
          <SectionSubtitle subtitle="⚙️ What I Do" />
          <h3 data-aos="flip-left" data-aos-duration="1000">
            🌐 Seamless web applications that redefine user experiences.{' '}
          </h3>
          <h3 data-aos="fade-down" data-aos-duration="1000">
            📱 Innovative mobile apps for the on-the-go generation.
          </h3>
          <p data-aos="zoom-in" data-aos-duration="1000">
            🎨 Beautifully designed websites that leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
