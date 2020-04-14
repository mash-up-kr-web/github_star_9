import React from 'react';
import SearchResultListItem from '@atoms/SearchResultListItem';

export default function SearchResultList({ resultItems }) {
  if (!resultItems.length) return null;

  return (
    <ul className="search_result">
      {resultItems.map(({ id, ...props }) => (
        <li key={id}>
          <SearchResultListItem {...props} id={id} />
        </li>
      ))}
    </ul>
  );
}
