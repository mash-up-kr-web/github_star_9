import React from 'react';
import { Button, SearchInput } from '@atoms';
import './style.scss';

export default function SearchBar() {
  return (
    <div className="search_bar">
      <SearchInput
        value=""
        placeholder="github user 또는 organization을 검색해보세요."
      />
      <Button name="search" />
    </div>
  );
}
