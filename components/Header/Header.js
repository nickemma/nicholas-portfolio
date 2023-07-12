import { useState, useEffect } from 'react';
import AOS from 'aos';
import classes from './header.module.css';
import Link from 'next/link';
import 'aos/dist/aos.css';
import Logo from '../../public/images/myLogo1.png';
import Image from 'next/image';

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
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'linear' });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY >= 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleShow);
  }, []);

  return (
    <header className={`${classes.header}`}>
      <div className={`${classes.logo}`}>
        <Image
          src={Logo}
          alt="logo"
          width={180}
          height={50}
          objectFit="cover"
        />
        <h2>{/* <span>Techie</span>Emma */}</h2>
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
      </ul>
      <span className={`${classes.mobile_menu}`}>
        <i className="ri-menu-line" onClick={handleClick}></i>
      </span>
    </header>
  );
};

export default Header;
