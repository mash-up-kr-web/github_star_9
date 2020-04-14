import React from 'react';
import StarCount from '@atoms/StarCount';
import './style.scss';

export default function SearchResultListItem({ name, starCount }) {
  return (
    <div className="search_result_item">
      <div className="item_name">{name}</div>
      <StarCount starCount={starCount} />
    </div>
  );
}
