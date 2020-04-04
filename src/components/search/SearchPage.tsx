import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import api from '~/utils/api';
import { delay } from '~/utils/etc';
import { parseUserInfo } from '~/parser';
import { UserInfo } from '~/model';

import Loading from '~/components/common/Loading';
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

interface SearchPageProps {}

interface Status {
  fetched: boolean;
  loading: boolean;
  error: boolean;
}

const initialStatus = { fetched: false, loading: false, error: false };

const SearchPageHeader: React.FC<{ search: (username: string) => void }> = React.memo(({ search }) => {
  return (
    <>
      <BeautifulTitle title="Gitstar Ranking" />
      <h3 className="sub-title">Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <SearchKeywordBox search={search} />
    </>
  );
});

const SearchPage: React.FC<SearchPageProps> = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [hasBeenSearched, setHasBeenSearched] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>(initialStatus);

  const search = async (username: string) => {
    setUserInfo(undefined);
    setStatus({ fetched: false, loading: true, error: false });

    if (!hasBeenSearched) {
      setHasBeenSearched(true);
    }

    await delay(1000);

    try {
      const result = await api.getRepositories(username);
      const parsed = parseUserInfo(username, result);

      setUserInfo(parsed);
      setStatus((prevState) => ({ ...prevState, fetched: true, loading: false }));
    } catch {
      setStatus((prevState) => ({ ...prevState, loading: false, error: true }));
    }
  };

  return (
    <SearchPageLayout moveTop={hasBeenSearched}>
      <SearchPageHeader search={search} />
      {status.fetched && <SearchResult userInfo={userInfo} />}
      {status.loading && <Loading className="status-section" />}
      {status.error && <NotFound className="status-section" />}
    </SearchPageLayout>
  );
};

export default SearchPage;
