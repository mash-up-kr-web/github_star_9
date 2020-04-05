import React from 'react';
import SearchResultDescription from '@molecules/SearchResultDescription';
import SearchResultList from '@molecules/SearchResultList';
import './style.scss';

export default function SearchResult({
  name,
  repoCount,
  starCount,
  resultItems,
}) {
  return (
    <div className="search_result">
      <SearchResultDescription
        name={name}
        repoCount={repoCount}
        starCount={starCount}
      />
      <SearchResultList resultItems={resultItems} />
    </div>
  );
}
