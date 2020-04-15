import React from 'react';

export default function InputText(props) {
  return (
    <input type="text" placeholder={props.placeholder} ref={props.searchName}/>
  );
}