import styled from "styled-components";
import React from "react";

const Inputbox = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: gray;
  border: 2px solid;
`;

const Search = ({ inputHandler, clickHandler }) => {
  return (
    <div>
      <Inputbox placeholder="input username" onChange={inputHandler} />
      <Button onClick={clickHandler}> Search </Button>
    </div>
  );
};

export default Search;
