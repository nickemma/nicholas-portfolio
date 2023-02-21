import React, { useEffect } from 'react';
import AOS from 'aos';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/about.module.css';
import Image from 'next/image';
import 'aos/dist/aos.css';
import img01 from '../../public/images/image1.png';
import img02 from '../../public/images/image2.png';
import img03 from '../../public/images/image3.jpg';
import img04 from '../../public/images/image4.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'linear' });
    AOS.refresh();
  }, []);
  return (
    <section id="about" className={`${classes.about}`}>
      <div className={`${classes.box_container}`}>
        <div className={`${classes.content}`}>
          <SectionSubtitle subtitle="About me" />
          <h3>I&apos;m here</h3>
          <h3>to help your next project</h3>
          <p>
            I&apos;m a software developer from Nigeria, specializing in
            different technologies, Building web applications, Mobile apps, and
            beautiful websites for companies. I love digging into hard problems
            and learning new languages and technologies..
          </p>
          <h4>
            Languages and <span>Frameworks</span>
          </h4>
          <div className={`${classes.icon}`}>
            <div className={`${classes.box}`} data-aos="fade-left">
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Ruby
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Ruby on Rails
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                ReactJS
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Javascript
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Typescript
              </h5>
            </div>
            <div className={`${classes.box}`} data-aos="fade-right">
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                NextJS
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                TailwindCSS/SCSS
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Postgresql
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Redux
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                NodeJS/ExpressJS
              </h5>
            </div>
          </div>
        </div>

        <div className={`${classes.image}`}>
          <div className={`${classes.gallery}`}>
            <div className={`${classes.item}`} data-aos="zoom-in">
              <Image src={img01} alt="about-img" />
            </div>
            <div className={`${classes.item}`} data-aos="fade-left">
              <Image src={img02} alt="about-img" />
            </div>
          </div>
          <div className={`${classes.gallery}`}>
            <div className={`${classes.item}`} data-aos="flip-down">
              <Image src={img03} alt="about-img" />
            </div>
            <div className={`${classes.item}`} data-aos="zoom-out">
              <Image src={img04} alt="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
