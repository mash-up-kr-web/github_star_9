import React from 'react';
import { SearchResultListItem } from '@atoms';

export default function SearchResultList({ resultItems }) {
  return (
    <ul className="search_result">
      {resultItems &&
        resultItems.map(({ id, ...props }) => (
          <li>
            <SearchResultListItem {...props} key={id} />
          </li>
        ))}
    </ul>
  );
}
