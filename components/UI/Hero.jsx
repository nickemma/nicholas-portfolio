import React, { useEffect } from 'react';
import classes from '../../styles/hero.module.css';
import AOS from 'aos';
import SectionSubtitle from './SectionSubtitle';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '../../public/images/hero.webp';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 100, easing: 'linear' });
    AOS.refresh();
  }, []);

  return (
    <section className={`${classes.hero}`}>
      <div className={`${classes.box_container}`}>
        <div className={`${classes.content}`} data-aos="fade-down">
          <SectionSubtitle subtitle="Hi There" />
          <h3>NICHOLAS EMMANUEL</h3>
          <h5>Full-stack Dev & Software Engineer</h5>
          <p>
            I can help you build a product, feature, or website. Look through
            some of my work and experience! If you like what you see and have a
            project that needs to be coded, don&apos;t hesitate to contact me.
          </p>
          <div className={`${classes.btn}`}>
            <button type="button" className={`${classes.btn_primary}`}>
              <Link href="#contact">Hire me</Link>
            </button>
            <button type="button" className={`${classes.btn_primary}`}>
              <a href="/Nicholas.pdf" download>
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className={`${classes.image}`} data-aos="fade-right">
          <Image src={heroImg} alt="awesome" width="500" height="500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
