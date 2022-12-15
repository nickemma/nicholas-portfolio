import React from 'react';
import classes from '../../styles/hero.module.css';
import SectionSubtitle from './SectionSubtitle';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/images/hero.webp';

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <div className={`${classes.box_container}`}>
        <div className={`${classes.content}`}>
          <SectionSubtitle subtitle="Hi There" />
          <h3>
            I&apos;M NICHOLAS <br />
            EMMANUEL
          </h3>
          <h5>Software Developer</h5>
          <p>
            I can help you build a product, feature, or website. Look through
            some of my work and experience! If you like what you see and have a
            project that needs to be coded, don&apos;t hesitate to contact me.
          </p>
          <div className={`${classes.btn}`}>
            <button type="button" className={`${classes.btn_primary}`}>
              <Link href="#contact">Hire me</Link>
            </button>
          </div>
        </div>
        <div className={`${classes.image}`}>
          <Image src={heroImg} alt="awesome" width="500" height="500" />
          <div className={`${classes.skills}`}>
            <span>
              <i className="ri-lightbulb-flash-line"></i>
            </span>
            <div className={`${classes.expert}`}>
              <h4>2 years</h4>
              <h5>Experience</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
