import React from 'react';
import SearchResultListItem from '@atoms/SearchResultListItem';

export default function SearchResultList({ resultItems }) {
  return (
    <ul className="search_result">
      {resultItems &&
        resultItems.map(({ id, ...props }) => (
          <li key={id}>
            <SearchResultListItem {...props} id={id} />
          </li>
        ))}
    </ul>
  );
}
