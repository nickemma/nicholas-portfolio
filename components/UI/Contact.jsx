import React from 'react';
import Link from 'next/link';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/contact.module.css';
import Form from './Form';

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <div className={`${classes.row}`}>
        <div className={`${classes.col}`}>
          <SectionSubtitle subtitle="Contact me" />
          <h3>Contact with me</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            beatae ratione iusto cum. Doloremque suscipit eius provident error
            labore est reprehenderit, exercitationem corrupti earum deleniti!
          </p>
          <ul className={`${classes.contact_info}`}>
            <li className={`${classes.info_item}`}>
              <span>
                <i className="ri-map-pin-line"></i>
              </span>
              <p>Sylhet - Bangladesh</p>
            </li>
            <li className={`${classes.info_item}`}>
              <span>
                <i className="ri-mail-line"></i>
              </span>
              <p>muhib5532@gmail.com</p>
            </li>
            <li className={`${classes.info_item}`}>
              <span>
                <i className="ri-phone-line"></i>
              </span>
              <p>+088123456789</p>
            </li>
          </ul>
          <div className={`${classes.social_links}`}>
            <Link href="#">
              <i className="ri-twitter-line"></i>
            </Link>
            <Link href="#">
              <i className="ri-github-line"></i>
            </Link>
            <Link href="#">
              <i className="ri-facebook-line"></i>
            </Link>
            <Link href="#">
              <i className="ri-linkedin-line"></i>
            </Link>
            <Link href="#">
              <i className="ri-instagram-line"></i>
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
