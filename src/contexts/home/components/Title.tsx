import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";

import { HomeContext } from "../HomeContext";

const Title = () => {
  const {
    searchRepo,
  } = useContext(HomeContext);

  const [inputValue, setInputValue] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e?.target?.value);
    },
    [setInputValue],
  );

  const handleSearch = useCallback(() => {
    searchRepo(inputValue);
  }, [inputValue]);

  const handleEnter = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      searchRepo(inputValue);
    }
  }, [inputValue]);

  return (
    <TitleWrapper>
      <h1>Gitstar Ranking</h1>
      <h3>
        Unofficial GitHub star ranking for users, organizations and
        repositories.
      </h3>
      <TitleInput value={inputValue} onChange={handleChange} onKeyDown={handleEnter} />
      <TitleButton onClick={handleSearch}>Search</TitleButton>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.header`
  padding: 10px;
  background-color: rgb(250, 250, 250);
`;

const TitleInput = styled.input`
  padding: 5px 8px;
  font-size: 12px;
`;

const TitleButton = styled.button`
  padding: 5px 8px;
  margin-left: 10px;
  font-size: 12px;
  background-color: rgb(226, 226, 226);
  border: none;
`;
