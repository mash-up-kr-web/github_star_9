import axios from 'axios';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Button } from './components/Button';
import { Input } from './components/Input';
import { RepoItem } from './components/RepoItem';
import config from './config';
import useInput from './hooks/useInput';

const { APISERVERPATH, TOKEN } = config;

const OAUTH = {
  headers: { Authorization: `token ${TOKEN}` }
};

const App = () => {
  const [state, onChange] = useInput({ username: "" });

  const { username } = state;

  const handleSearch = useCallback(async () => {
    const response = await axios.get(`${APISERVERPATH}/users/${username}/repos?per_page=1`, OAUTH);
  }, [username]);

  return (
    <Container>
      <Header>
        <Title>GitStar Ranking</Title>
        <Description>Unofficial GitHub Star ranking for users, organizations and repositories</Description>
        <Input onChange={onChange} name="username" />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </Header>
      <RepoItem></RepoItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  background-color: #f8f9fa;
  padding: 18px;
`;

const Title = styled.h1`
  font-weight: 300;
  color: #343a40;
  font-size: 48px;
`;

const Description = styled.p`
  color: #343a40;
  font-weight: 500;
  font-size: 18px;
`;

const StyledButton = styled(Button)`
  margin-left: 20px;
`;

export default App;
