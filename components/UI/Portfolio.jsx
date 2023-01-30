import React, { useState, useEffect } from 'react';
import SectionSubtitle from './SectionSubtitle';
import classes from '../../styles/portfolio.module.css';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../data/data';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    if (filter === 'Full Stack App') {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab_btn_active}`;

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'linear' });
    AOS.refresh();
  }, []);

  return (
    <section id="portfolio" className={`${classes.portfolio}`}>
      <div className={`${classes.box_container}`} data-aos="fade-right">
        <SectionSubtitle subtitle=" My portfolio" />
        <h5>Some of my distinguished work</h5>
      </div>
      <div className={`${classes.col_1}`}>
        <div className={`${classes.tab_btn}`} data-aos="fade-left">
          <button
            className={` ${filter === 'Frontend App' ? active : ''}`}
            onClick={() => setFilter('Frontend App')}
          >
            Frontend App
          </button>
          <button
            className={`${filter === 'Full Stack App' ? active : ''}`}
            onClick={() => setFilter('Full Stack App')}
          >
            Full Stack App
          </button>
        </div>
      </div>
      <div className={`${classes.rows}`} data-aos="zoom-in">
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
