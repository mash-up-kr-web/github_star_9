import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

import api from '~/utils/api';
import { delay } from '~/utils/etc';
import { UserInfo } from '~/model';

import LoadingSpinner from '~/components/common/LoadingSpinner';
import NotFound from '~/components/common/NotFound';

import BeautifulTitle from './BeautifulTitle';
import SearchKeywordBox from './SearchKeywordBox';
import SearchResult from './SearchResult';

const SearchPageLayout = React.memo(styled.main<{ moveTop: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  position: absolute;
  top: 30vh;

  .sub-title {
    margin: 1rem 0;

    font-size: 2rem;
    font-weight: lighter;
    text-align: center;
  }

  .status-section {
    margin: 3rem;
  }

  ${(props) =>
    props.moveTop &&
    css`
      animation-name: moveSearchBoxToTop;
      animation-duration: 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;

      @keyframes moveSearchBoxToTop {
        100% {
          top: 5vh;
        }
      }
    `};
`);

interface SearchPageHeaderProps {
  search: (username: string) => void;
}

interface SearchPageBodyProps {
  status?: PageStatus;
  userInfo?: UserInfo;
}

enum PageStatus {
  Fetched = 'Fetched',
  Loading = 'Loading',
  Error = 'Error',
}

const SearchPageHeader: React.FC<SearchPageHeaderProps> = React.memo(({ search }) => {
  return (
    <>
      <BeautifulTitle title="Gitstar Ranking" />
      <h3 className="sub-title">Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <SearchKeywordBox search={search} />
    </>
  );
});

const SearchPageBody: React.FC<SearchPageBodyProps> = ({ status, userInfo }) => {
  switch (status) {
    case PageStatus.Fetched:
      return <SearchResult userInfo={userInfo} />;
    case PageStatus.Loading:
      return <LoadingSpinner className="status-section" />;
    case PageStatus.Error:
      return <NotFound className="status-section" />;
    default:
      return null;
  }
};

const SearchPage: React.FC<{}> = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [hasBeenSearched, setHasBeenSearched] = useState<boolean>(false);
  const [status, setStatus] = useState<PageStatus>();

  const search = useCallback(
    async (username: string) => {
      setStatus(PageStatus.Loading);

      if (!hasBeenSearched) {
        setHasBeenSearched(true);
      }

      await delay(1000);

      try {
        const result = await api.getUserInfo(username);
        setUserInfo(result);

        setStatus(PageStatus.Fetched);
      } catch {
        setStatus(PageStatus.Error);
      }
    },
    [hasBeenSearched],
  );

  return (
    <SearchPageLayout moveTop={hasBeenSearched}>
      <SearchPageHeader search={search} />
      <SearchPageBody status={status} userInfo={userInfo} />
    </SearchPageLayout>
  );
};

export default SearchPage;
