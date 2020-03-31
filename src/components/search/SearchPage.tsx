import React from 'react';
import styled from 'styled-components';

import BeautifulTitle from './BeautifulTitle';
import SearchKeywordBox from './SearchKeywordBox';

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
  return (
    <SearchPageLayout>
      <BeautifulTitle title="Gitstar Ranking" />
      <h3 className="sub-title">Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <SearchKeywordBox />
    </SearchPageLayout>
  );
};

export default SearchPage;
