import React from 'react';
import classes from '../../styles/hero.module.css';
import SectionSubtitle from './SectionSubtitle';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/images/hero.png';

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <div className={`${classes.box_container}`}>
        <div className={`${classes.content}`}>
          <SectionSubtitle subtitle="hi there" />
          <h3>I'M nicholas emmanuel</h3>
          <h5>full-stack developer</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
            dolores ut eaque nulla perspiciatis voluptatibus obcaecati aliquid
            pariatur.
          </p>
          <div className={`${classes.btn}`}>
            <button type="button" className={`${classes.btn_primary}`}>
              <Link href="#">hire me</Link>
            </button>
            <button type="button" className={`${classes.btn_secondary}`}>
              <Link href="#">download CV</Link>
            </button>
          </div>
        </div>
        <div className={`${classes.image}`}>
          <Image src={heroImg} alt="awesome" width="500" height="500" />
          <div className={`${classes.skills}`}>
            <span>
              <i class="ri-lightbulb-flash-line"></i>
            </span>
            <div className={`${classes.expert}`}>
              <h4>1 years</h4>
              <h5>experience</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
