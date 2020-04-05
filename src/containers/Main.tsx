import { inject, observer } from 'mobx-react';
import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { RepoItem } from '../components/RepoItem';
import useInput from '../hooks/useInput';
import Store from '../stores/store';

interface Props {
  store: Store;
}

const Main: React.FC<Props> = (props) => {
  const [state, onChange] = useInput({ username: "" });

  const { username } = state;

  const { store } = props;

  const repoItems = useMemo(() => {
    return store.data.map((el) => <RepoItem {...el} />);
  }, [store.data]);

  const userInfo = useMemo(() => {
    return (
      store.username && (
        <UserInfo>
          <UserName>{store.username}</UserName>
          <Count>{store.repoCount} Repositories</Count>
          <Count>{store.totalStars} Stars</Count>
        </UserInfo>
      )
    );
  }, [store.username, store.repoCount, store.totalStars]);

  const handleSearch = useCallback(async () => {
    store.fetchData(username);
  }, [store, username]);

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <Container>
      <Header>
        <Title>GitStar Ranking</Title>
        <Description>Unofficial GitHub Star ranking for users, organizations and repositories</Description>
        <Input onChange={onChange} name="username" onKeyUp={handleKeyUp} />
        <StyledButton onClick={handleSearch}>Search</StyledButton>
      </Header>
      {userInfo}
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

const UserInfo = styled.div`
  padding: 12px 0px;
  border-bottom: 1px solid #ced4da;
  margin-bottom: 24px;
`;

const UserName = styled(Title)`
  font-size: 42px;
  margin: 0;
`;

const Count = styled.span`
  font-weight: 400;
  color: #343a40;
  font-size: 24px;
  padding-right: 12px;

  & + span {
    border-left: 2px solid #343a40;
    padding-left: 12px;
  }
`;

const RepoItems = styled.div``;

export default inject("store")(observer(Main));
