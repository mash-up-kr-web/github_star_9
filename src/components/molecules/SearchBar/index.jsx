import React, { useRef } from 'react';
import Button from '@atoms/Button';
import './style.scss';

const ENTER = 'Enter';

export default function SearchBar({ onSearch }) {
  const searchInput = useRef(null);

  const handleOnSearch = () => {
    onSearch(searchInput.current.value);
    searchInput.current.focus();
  };

  const handleKeyUp = ({ key }) => {
    if (key !== ENTER) return;

    handleOnSearch();
  };

  const handleOnClick = () => {
    searchInput.current.value = '';
  };

  return (
    <div className="search_bar">
      <input
        placeholder="github user 또는 organization을 검색해보세요."
        ref={searchInput}
        onKeyUp={handleKeyUp}
        onClick={handleOnClick}
      />
      <Button name="search" onClick={handleOnSearch} />
    </div>
  );
}
