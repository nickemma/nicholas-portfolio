import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/contact.module.css';
import Form from './Form';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'linear' });
    AOS.refresh();
  }, []);
  return (
    <section id="contact" className={`${classes.contact}`}>
      <div className={`${classes.row}`}>
        <div className={`${classes.col}`}>
          <SectionSubtitle subtitle="Contact me" />
          <h3>Let&apos;s do it together</h3>
          <p>
            Question, comment or concern? This contact form is the best way to
            get in touch with me.
          </p>
          <ul className={`${classes.contact_info}`}>
            <li className={`${classes.info_item}`} data-aos="fade-left">
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <p>Lagos - Nigeria</p>
            </li>
            <li className={`${classes.info_item}`} data-aos="fade-right">
              <span>
                <i className="ri-mail-line"></i>
              </span>
              <p>nicholasemmanuel321@gmail.com</p>
            </li>
            <li className={`${classes.info_item}`} data-aos="fade-down">
              <span>
                <i className="ri-phone-line"></i>
              </span>
              <p>+2349070851385</p>
            </li>
          </ul>
          <div className={`${classes.social_links}`}>
            <Link href="https://twitter.com/techieEmma">
              <a target="_blank" data-aos="fade-left">
                <i className="ri-twitter-line"></i>
              </a>
            </Link>
            <Link href="https://github.com/NickEmma">
              <a target="_blank" data-aos="fade-right">
                <i className="ri-github-line"></i>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/techieemma/">
              <a target="_blank" data-aos="fade-left">
                <i className="ri-linkedin-line"></i>
              </a>
            </Link>
            <Link href="https://medium.com/@nicholasemmanuel321">
              <a target="_blank" data-aos="fade-right">
                <i className="ri-medium-fill"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className={`${classes.col}`}>
          <Form />
        </div>
      </div>
    </section>
  );
};
export default Contact;
