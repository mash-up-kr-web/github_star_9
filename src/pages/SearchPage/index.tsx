import React, { useEffect, useCallback, useContext } from 'react';

import Styled from './style';

import usePageManipulation from './hooks/usePageManipulation';
import useHistoryEvent from './hooks/useHistoryEvent';

import { delay } from '~/utils/etc';
import { UserInfo } from '~/model';

import LoadingSpinner from '~/components/common/LoadingSpinner';
import NotFound from '~/components/common/NotFound';

import BeautifulTitle from '~/components/search/BeautifulTitle';
import SearchKeywordBox from '~/components/search/SearchKeywordBox';
import SearchResult from '~/components/search/SearchResult';

import PageStatusProvider, { PageStatus, PageStatusContext } from '~/contexts/PageStatus';
import UserInfoProvider, { UserInfoContext } from '~/contexts/UserInfo';

interface SearchPageHeaderProps {
  search: (username: string) => void;
  initialKeyword: string;
}

interface SearchPageBodyProps {
  pageStatus?: PageStatus;
  userInfo?: UserInfo;
}

const SearchPageHeader: React.FC<SearchPageHeaderProps> = React.memo(({ search, initialKeyword }) => {
  return (
    <>
      <BeautifulTitle title="Gitstar Ranking" />
      <h3 className="sub-title">Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <SearchKeywordBox search={search} initialKeyword={initialKeyword} />
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
  const { pageStatus, chagePageStatus } = useContext(PageStatusContext);
  const { userInfo, searchUsefInfo } = useContext(UserInfoContext);

  const { moveTop, checkHasBeenSearched, startFromTop, queryString } = usePageManipulation(pageStatus);

  const search = useCallback(
    async (username: string) => {
      chagePageStatus(PageStatus.Loading);

      checkHasBeenSearched();

      await delay(1000);

      try {
        await searchUsefInfo(username);

        chagePageStatus(PageStatus.Fetched);
      } catch {
        chagePageStatus(PageStatus.Error);
      }
    },
    [chagePageStatus, searchUsefInfo, checkHasBeenSearched],
  );

  const historyPushForSearchUserInfo = useHistoryEvent(search, chagePageStatus);

  useEffect(() => {
    const username = queryString.get('username');
    if (username) search(username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.SearchPage moveTop={moveTop} startFromTop={startFromTop}>
      <SearchPageHeader search={historyPushForSearchUserInfo} initialKeyword={queryString.get('username') ?? ''} />
      <SearchPageBody pageStatus={pageStatus} userInfo={userInfo} />
    </Styled.SearchPage>
  );
};

export default () => (
  <PageStatusProvider>
    <UserInfoProvider>
      <SearchPage />
    </UserInfoProvider>
  </PageStatusProvider>
);
