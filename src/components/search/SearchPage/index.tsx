import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import Styled from './style';

import api from '~/utils/api';
import { delay } from '~/utils/etc';
import { UserInfo } from '~/model';
import useQuery from '~/hooks/useQuery';

import LoadingSpinner from '~/components/common/LoadingSpinner';
import NotFound from '~/components/common/NotFound';

import BeautifulTitle from '../BeautifulTitle';
import SearchKeywordBox from '../SearchKeywordBox';
import SearchResult from '../SearchResult';

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
  const query = useQuery();

  return (
    <>
      <BeautifulTitle title="Gitstar Ranking" />
      <h3 className="sub-title">Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <SearchKeywordBox search={search} initialKeyword={query.get('username') ?? ''} />
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
  const history = useHistory();
  const query = useQuery();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const openedWithUsername = useMemo(() => query.has('username'), []);

  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [hasBeenSearched, setHasBeenSearched] = useState<boolean>(openedWithUsername);
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

  const searchAfterHistoryPush = useCallback(
    (username: string) => {
      history.push(`?username=${username}`);
    },
    [history],
  );

  useEffect(() => {
    history.listen((location) => {
      const username = new URLSearchParams(location.search).get('username');
      if (username) search(username);
    });

    const username = query.get('username');
    if (username) search(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.SearchPage moveTop={hasBeenSearched} startFromTop={openedWithUsername}>
      <SearchPageHeader search={searchAfterHistoryPush} />
      <SearchPageBody status={status} userInfo={userInfo} />
    </Styled.SearchPage>
  );
};

export default SearchPage;
