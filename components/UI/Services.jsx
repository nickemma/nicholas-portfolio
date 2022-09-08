import React from 'react';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/services.module.css';
import ServicesItem from './ServicesItem';

const Services = () => {
  return (
    <section id="services" className={`${classes.services}`}>
      <div className={`${classes.box_container}`}>
        <div className={`${classes.icons}`}>
          <div className={`${classes.items}`}>
            <div className={`${classes.item1}`}>
              <ServicesItem title="Frontend Development" icon="ri-apps-line" />
            </div>
            <div className={`${classes.item2}`}>
              <ServicesItem
                title="Backend Development"
                icon="ri-computer-line"
              />
            </div>
          </div>
          <div className={`${classes.item3}`}>
            <ServicesItem
              title="Full-Stack Development"
              icon="ri-code-s-slash-line"
            />
          </div>
        </div>
        <div className={`${classes.content_service}`}>
          <SectionSubtitle subtitle="What I do" />
          <h3>Better Design,</h3>
          <h3>Better Experience</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet
            culpa nobis corporis officiis, numquam cupiditate, enim expedita
            eveniet dolorum, aliquid nesciunt sapiente illo voluptatum! Dolores
            fuga mollitia atque, placeat minima quibusdam accusantium! Veniam,
            non distinctio dolorem rerum laboriosam deleniti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
