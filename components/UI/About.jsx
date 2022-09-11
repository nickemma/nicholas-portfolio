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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            neque asperiores temporibus quo saepe odio, esse labore libero
            obcaecati quidem explicabo blanditiis deleniti ex vitae ratione
            ullam fugiat dicta eum sint officiis porro illum quia. Error quam
            cum excepturi beatae.
          </p>
          <h4>
            languages <span>frameworks</span> and tools{' '}
          </h4>
          <div className={`${classes.icon}`}>
            <div className={`${classes.box}`}>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Problem Solving
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Problem Solving
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Problem Solving
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Problem Solving
              </h5>
            </div>
            <div className={`${classes.box}`}>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h5>
            </div>
            <div className={`${classes.box}`}>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Creative Idea
              </h5>
            </div>
          </div>
          <div className={`${classes.btn}`}>
            <button type="button" className={`${classes.btn_primary}`}>
              <Link href="#">my portfolio</Link>
            </button>
            <button type="button" className={`${classes.btn_secondary}`}>
              <Link href="#">download CV</Link>
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
