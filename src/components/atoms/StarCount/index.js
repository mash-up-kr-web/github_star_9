import React from 'react';
import StarIcon from './star.svg';
import './style.scss';

export default function StarCount({ starCount }) {
  return (
    <span className="item_count_wrapper">
      <img src={StarIcon} alt="star icon" className="icon_star" />
      {starCount}
    </span>
  );
}
