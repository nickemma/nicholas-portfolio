import React, { useState, useEffect } from 'react';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/portfolio.module.css';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../data/data';

const Portfolio = () => {
  const [filter, setFilter] = useState('Mobile App');
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === 'Mobile App') {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === 'Web Design') {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab_btn_active}`;

  return (
    <section id="portfolio" className={`${classes.portfolio}`}>
      <div className={`${classes.box_container}`}>
        <SectionSubtitle subtitle=" My portfolio" />
        <h5>Some of my distinguished works</h5>
      </div>
      <div className={`${classes.col_1}`}>
        <div className={`${classes.tab_btn}`}>
          <button
            className={` ${filter === 'Mobile App' ? active : ''}`}
            onClick={() => setFilter('Mobile App')}
          >
            Mobile App
          </button>
          <button
            className={`${filter === 'Web Design' ? active : ''}`}
            onClick={() => setFilter('Web Design')}
          >
            Web Design
          </button>
        </div>
      </div>
      <div className={`${classes.rows}`}>
        {data?.map((item) => (
          <div key={item.id}>
            <PortfolioItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
