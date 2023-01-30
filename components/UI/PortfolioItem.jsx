import React from 'react';
import classes from '../../styles/portfolio-item.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioItem = (props) => {
  const { title, description, img, liveUrl, source, keyword } = props.item;
  return (
    <div className={`${classes.portfolio_item}`}>
      <div className={`${classes.portfolio_content}`}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={`${classes.portfolio_live}`}>
          <button type="button" className={`${classes.portfolio_btn}`}>
            <Link href={liveUrl}>
              <a target="_blank">Live Demo</a>
            </Link>
            <i className="ri-external-link-line"></i>
          </button>
          <button type="button" className={`${classes.portfolio_btn}`}>
            <Link href={source}>
              <a target="_blank">Source Code</a>
            </Link>
            <i className="ri-github-line"></i>
          </button>
        </div>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio_keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className={`${classes.portfolio_img}`}>
        <Image src={img} width="500" height="300" alt="portfolio-img" />
      </div>
    </div>
  );
};

export default PortfolioItem;
