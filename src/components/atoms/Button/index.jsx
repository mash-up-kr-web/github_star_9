import React from 'react';
import './style.scss';

const Button = ({ name, onClick }) => (
  <button type="button" onClick={onClick}>
    {name}
  </button>
);

export default Button;
