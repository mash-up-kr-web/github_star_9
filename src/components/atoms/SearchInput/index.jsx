import React from 'react';
import './style.scss';

const SearchInput = ({ value, placeholder, onChange }) => (
  <input
    placeholder={placeholder}
    value={value ? value : ''}
    onChange={onChange}
  />
);
export default SearchInput;
