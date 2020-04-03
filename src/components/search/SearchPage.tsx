import React, { useState } from 'react';
import styled from 'styled-components';

import api from '~/utils/api';
import { parseUserInfo } from '~/parser';
import { UserInfo } from '~/model';

import BeautifulTitle from './BeautifulTitle';
import SearchKeywordBox from './SearchKeywordBox';
import SearchResult from './SearchResult';

const SearchPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  position: absolute;
  top: 30%;

  .sub-title {
    margin: 1rem 0;

    font-size: 2rem;
    font-weight: lighter;
    text-align: center;
  }
`;

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const search = async (username: string) => {
    setUserInfo(undefined);

    try {
      const result = await api.getRepositories(username);
      const parsed = parseUserInfo(username, result);
      setUserInfo(parsed);
    } catch {
      alert('not correct');
    }
  };

  return (
    <SearchPageLayout>
      <BeautifulTitle title="Gitstar Ranking" />
      <h3 className="sub-title">Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <SearchKeywordBox search={search} />
      <SearchResult userInfo={userInfo} />
    </SearchPageLayout>
  );
};

export default SearchPage;
