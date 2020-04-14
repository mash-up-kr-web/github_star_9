import React from 'react';
import SearchResultListItem from '@atoms/SearchResultListItem';

export default function SearchResultList({ resultItems }) {
  if (!resultItems.length) return null;

  return (
    <ul className="search_result">
      {resultItems.map(({ id, url, ...props }) => (
        <li key={id}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <SearchResultListItem {...props} id={id} />
          </a>
        </li>
      ))}
    </ul>
  );
}
