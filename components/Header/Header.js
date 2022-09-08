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
  return (
    <header className={`${classes.header}`}>
      <div className={`${classes.logo}`}>
        <h2>
          <span>techie</span>Emma
        </h2>
      </div>
      <ul className={`${classes.nav_menu}`}>
        {NAV_LINKS.map((items, index) => (
          <li key={index}>
            <Link href={items.path}>{items.display}</Link>
          </li>
        ))}
        <div className={`${classes.nav_icon}`}>
          <i className="ri-phone-line"> +2349163198026</i>
        </div>
      </ul>
    </header>
  );
};

export default Header;
