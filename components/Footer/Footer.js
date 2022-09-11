import React from 'react';
import classes from './footer.module.css';
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

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={`${classes.footer}`}>
      <div className={`${classes.hold}`}>
        <div className={`${classes.info}`}>
          {NAV_LINKS.map((items, index) => (
            <li key={index}>
              <Link href={items.path}>{items.display}</Link>
            </li>
          ))}
        </div>
        <div className={`${classes.credit}`}>
          <h3>
            created by <span>techie</span>Emma
          </h3>
        </div>
      </div>
      <div className={`${classes.copy}`}>
        <p>
          {year} - developed by <span>Techie</span> Emma | all right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
