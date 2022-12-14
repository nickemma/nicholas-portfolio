import React, { useState, useEffect } from 'react';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/portfolio.module.css';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../data/data';

const Portfolio = () => {
  const [filter, setFilter] = useState('Frontend App');
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === 'Frontend App') {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === 'UI/UX Design') {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
    if (filter === 'Full Stack App') {
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
            className={` ${filter === 'Frontend App' ? active : ''}`}
            onClick={() => setFilter('Frontend App')}
          >
            Frontend App
          </button>
          <button
            className={`${filter === 'UI/UX Design' ? active : ''}`}
            onClick={() => setFilter('UI/UX Design')}
          >
            UI/UX Design
          </button>
          <button
            className={`${filter === 'Full Stack App' ? active : ''}`}
            onClick={() => setFilter('Full Stack App')}
          >
            Full Stack App
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
