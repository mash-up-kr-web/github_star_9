import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Styled from './style';

import api from '~/utils/api';
import { delay } from '~/utils/etc';
import { UserInfo } from '~/model';
import useQuery from '~/hooks/useQuery';

import LoadingSpinner from '~/components/common/LoadingSpinner';
import NotFound from '~/components/common/NotFound';

import { PageStatus, PageStatusContext } from '~/contexts/PageStatus';

import BeautifulTitle from '../BeautifulTitle';
import SearchKeywordBox from '../SearchKeywordBox';
import SearchResult from '../SearchResult';

interface SearchPageHeaderProps {
  search: (username: string) => void;
}

interface SearchPageBodyProps {
  pageStatus?: PageStatus;
  userInfo?: UserInfo;
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

const SearchPageBody: React.FC<SearchPageBodyProps> = ({ pageStatus, userInfo }) => {
  switch (pageStatus) {
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

  const { pageStatus, chagePageStatus } = useContext(PageStatusContext);

  const search = useCallback(
    async (username: string) => {
      chagePageStatus(PageStatus.Loading);

      if (!hasBeenSearched) {
        setHasBeenSearched(true);
      }

      await delay(1000);

      try {
        const result = await api.getUserInfo(username);
        setUserInfo(result);

        chagePageStatus(PageStatus.Fetched);
      } catch {
        chagePageStatus(PageStatus.Error);
      }
    },
    [hasBeenSearched, chagePageStatus],
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
      <SearchPageBody pageStatus={pageStatus} userInfo={userInfo} />
    </Styled.SearchPage>
  );
};

export default SearchPage;
