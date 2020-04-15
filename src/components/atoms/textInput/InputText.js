import React from 'react';
import './InputText.css';

export default function InputText(props) {
  return (
    <input className="input" type="text" placeholder={props.placeholder} ref={props.searchName}/>
  );
}