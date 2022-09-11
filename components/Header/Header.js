import { useState } from 'react';
import classes from './header.module.css';
import Link from 'next/link';

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
    path: '#contact',
    display: 'Contact',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${classes.header}`}>
      <div className={`${classes.logo}`}>
        <h2>
          <span>techie</span>Emma
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
        <div className={`${classes.nav_icon}`}>
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
