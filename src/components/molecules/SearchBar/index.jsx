import React, { useRef } from 'react';
import Button from '@atoms/Button';
import './style.scss';

export default function SearchBar({ onSearch }) {
  const searchInput = useRef(null);

  const handleOnSearch = () => {
    onSearch(searchInput.current.value);
    searchInput.current.focus();
  };

  return (
    <div className="search_bar">
      <input
        placeholder="github user 또는 organization을 검색해보세요."
        ref={searchInput}
      />
      <Button name="search" onClick={handleOnSearch} />
    </div>
  );
}
