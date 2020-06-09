import React, { useCallback, useMemo } from "react";
import styled from "styled-components";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { RepoItem } from "../components/RepoItem";
import { UserInfo } from "../components/UserInfo";
import useInput from "../hooks/useInput";
import Store from "../stores/store";

const ENTER = 13;

const Main = () => {
  const store = useMemo(() => {
    return Store.getInstance();
  }, []);

  const { state, onChange } = useInput({ username: "" });

  const { username } = state;

  const repoItems = useMemo(() => {
    return store.data.map((el) => <RepoItem {...el} />);
  }, [store.data]);

  const handleSearch = useCallback(() => {
    store.fetchData(username);
  }, [store, username]);

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === ENTER) {
        handleSearch();
      }
    },
    [handleSearch],
  );

  return (
    <Container>
      <Header>
        <Title>GitStar Ranking</Title>
        <Description>Unofficial GitHub Star ranking for users, organizations and repositories</Description>
        <Input onChange={onChange} name="username" onKeyUp={handleKeyUp} />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </Header>
      <UserInfo userName={store.username} repoCount={store.repoCount} totalStars={store.totalStars} />
      <RepoItems>{repoItems}</RepoItems>
    </Container>
  );
};

const Container = styled.div``;

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

const RepoItems = styled.div``;

export default Main;
