import React from 'react';
import { StarCount } from '@atoms';
import './style.scss';

export default function SearchListItem({ name, starCount }) {
  return (
    <div className="search_result_item">
      <div className="item_name">{name}</div>
      <StarCount starCount={starCount} />
    </div>
  );
}
