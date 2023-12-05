import React, { useEffect } from 'react';
import AOS from 'aos';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/about.module.css';
import Image from 'next/image';
import 'aos/dist/aos.css';
import img01 from '../../public/images/image1.png';
import img02 from '../../public/images/program1.png';
import img03 from '../../public/images/program2.png';
import img04 from '../../public/images/program3.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'linear' });
    AOS.refresh();
  }, []);
  return (
    <section id="about" className={`${classes.about}`}>
      <div className={`${classes.box_container}`}>
        <div className={`${classes.content}`}>
          <SectionSubtitle subtitle="🚀 About me" />
          <h3>
            I&apos;m Emmanuel, your go-to maestro for turning digital dreams
            into reality. 🎉
          </h3>
          <p>
            🌍 Hailing from the vibrant tech landscape of Nigeria, I&apos;m a
            passionate full-stack software engineer with a knack for crafting
            immersive experiences. I orchestrate web applications, mobile apps,
            and captivating websites for forward-thinking companies.
          </p>
          <h4>💻 Tech Playground:</h4>
          <div className={`${classes.icon}`}>
            <div className={`${classes.box}`} data-aos="fade-left">
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Languages: Java, JavaScript, Python, and the list keeps growing.
              </h5>
              <h5>
                <span className={`${classes.about_icon}`}>
                  <i className="ri-checkbox-circle-line"></i>
                </span>
                Frameworks: React, Node.Js, Django – because building on solid
                foundations is key.
              </h5>
            </div>
            <h4>🤓 Beyond the Code:</h4>
            <div className={`${classes.box}`} data-aos="fade-left">
              <h5>
                ⚽ Football Aficionado: When not coding, you&apos;ll find me
                scoring goals on the football pitch.{' '}
              </h5>
              <h5>
                🎤 Vocal Virtuoso: Unwinding by crooning a tune or two because
                life is a melody.
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
