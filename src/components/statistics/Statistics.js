import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const randomRgbColor = () => {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    <h2 className={style.title}>{title}</h2>

    <ul className={style.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={style.item}
          style={{ backgroundColor: randomRgbColor() }}
          key={id}
        >
          <span className={style.label}>{label}</span>
          <span className={style.percentage}>{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
