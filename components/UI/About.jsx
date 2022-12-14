import React from 'react';
import Link from 'next/link';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/about.module.css';
import Image from 'next/image';

import img01 from '../../public/images/image1.png';
import img02 from '../../public/images/image2.png';
import img03 from '../../public/images/image3.jpg';
import img04 from '../../public/images/image4.jpg';

const About = () => {
  return (
    <section id="about" className={`${classes.about}`}>
      <div className={`${classes.box_container}`}>
        <div className={`${classes.content}`}>
          <SectionSubtitle subtitle="About me" />
          <h3>I&apos;m here</h3>
          <h3>to help your next project</h3>
          <p>
            I&apos;m Nicholas Emmanuel a software developer specialized in
            different technologies, Building web applications, Mobile apps and
            beautiful websites for companies. Love digging into hard problems,
            learning new languages and technologies.
          </p>
          <h4>
            languages and <span>frameworks</span>
          </h4>
          <div className={`${classes.icon}`}>
            <div className={`${classes.box}`}>
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
            <div className={`${classes.box}`}>
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
          <div className={`${classes.btn}`}>
            <button type="button" className={`${classes.btn_primary}`}>
              <Link href="#">My Resume</Link>
            </button>
          </div>
        </div>

        <div className={`${classes.image}`}>
          <div className={`${classes.gallery}`}>
            <div className={`${classes.item}`}>
              <Image src={img01} alt="about-img" />
            </div>
            <div className={`${classes.item}`}>
              <Image src={img02} alt="about-img" />
            </div>
          </div>
          <div className={`${classes.gallery}`}>
            <div className={`${classes.item}`}>
              <Image src={img03} alt="about-img" />
            </div>
            <div className={`${classes.item}`}>
              <Image src={img04} alt="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
