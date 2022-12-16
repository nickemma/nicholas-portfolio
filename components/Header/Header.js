import { useState, useEffect } from 'react';
import AOS from 'aos';
import classes from './header.module.css';
import Link from 'next/link';
import 'aos/dist/aos.css';

const NAV_LINKS = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '#about',
    display: 'About',
  },
  {
    path: '#services',
    display: 'Services',
  },
  {
    path: '#portfolio',
    display: 'Portfolio',
  },
  {
    path: '#testimonials',
    display: 'Testimonials',
  },
  {
    path: '#contact',
    display: 'Contact',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'linear' });
    AOS.refresh();
  }, []);

  return (
    <header className={`${classes.header}`}>
      <div className={`${classes.logo}`}>
        <h2>
          <span>Techie</span>Emma
        </h2>
      </div>
      <ul
        className={
          isOpen
            ? `${classes.nav_menu} ${classes.active}`
            : `${classes.nav_menu}`
        }
      >
        {NAV_LINKS.map((items, index) => (
          <li key={index} onClick={handleClick}>
            <Link href={items.path}>{items.display}</Link>
          </li>
        ))}
        <div className={`${classes.nav_icon}`} data-aos="fade-left">
          <i className="ri-phone-line"> +2349163198026</i>
        </div>
      </ul>
      <span className={`${classes.mobile_menu}`}>
        <i className="ri-menu-line" onClick={handleClick}></i>
      </span>
    </header>
  );
};

export default Header;
