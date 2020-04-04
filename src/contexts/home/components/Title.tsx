import React, { useCallback } from "react";
import styled from "styled-components";

import useHomeStore from "../HomeStore";

const Title = () => {
  const { username, setUsername, onRepoSearch } = useHomeStore();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e?.target?.value);
    },
    [setUsername],
  );

  return (
    <TitleWrapper>
      <h1>Gitstar Ranking</h1>
      <h3>
        Unofficial GitHub star ranking for users, organizations and
        repositories.
      </h3>
      <TitleInput value={username} onChange={handleChange} />
      <TitleButton onClick={onRepoSearch}>Search</TitleButton>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
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
