import React from 'react';
import classes from './footer.module.css';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={`${classes.footer}`}>
      <div className={`${classes.copy}`}>
        <p>
          {year} - developed by <span>Techie Emma</span> | all right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
