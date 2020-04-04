import axios from 'axios';
import { inject, observer } from 'mobx-react';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { RepoItem } from '../components/RepoItem';
import config from '../config';
import useInput from '../hooks/useInput';

const { APISERVERPATH, TOKEN } = config;

const OAUTH = {
  headers: { Authorization: `token ${TOKEN}` },
};

interface Props {}

const App: React.FC<Props> = (props) => {
  const [state, onChange] = useInput({ username: "" });
  const [data, setData] = useState([]);

  const { username } = state;

  console.log(props);

  const repoItems = useMemo(() => {
    return data.map((el) => <RepoItem {...el} />);
  }, [data]);

  const totalStars = useMemo(() => {
    return data.reduce((prev, next: any) => prev + next.stargazers_count, 0);
  }, [data]);

  const handleSearch = useCallback(async () => {
    const response = await axios.get(`${APISERVERPATH}/users/${username}/repos`, OAUTH);

    if (response.status === 200) {
      setData(response.data);
    }
  }, [username]);

  return (
    <Container>
      <Header>
        <Title>GitStar Ranking</Title>
        <Description>Unofficial GitHub Star ranking for users, organizations and repositories</Description>
        <Input onChange={onChange} name="username" />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </Header>
      {repoItems}
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

export default inject("store")(observer(App));
