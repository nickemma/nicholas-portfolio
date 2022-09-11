import React from 'react';
import classes from '../../styles/subtitle.module.css';

const SectionSubtitle = (props) => {
  return <h4 className={`${classes.section_subtitle}`}>{props.subtitle}</h4>;
};

export default SectionSubtitle;
