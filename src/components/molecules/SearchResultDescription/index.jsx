import React from 'react';
import './style.scss';

export default function SearchResultDescription({
  name,
  repoCount,
  starCount,
}) {
  return (
    <div className="search_result_description">
      <div className="descript_name">{name}</div>
      <div className="descript_count_wrapper">
        <span className="repo_count">{repoCount} Repositories</span>
        <span className="star_count">{starCount} stars</span>
      </div>
    </div>
  );
}
