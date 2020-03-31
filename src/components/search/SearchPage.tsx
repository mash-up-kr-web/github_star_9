import React from 'react';
import styled from 'styled-components';

import SearchKeywordBox from './SearchKeywordBox';

const SearchPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  position: absolute;
  top: 30%;

  .title {
    margin-bottom: 0.5rem;

    font-size: 4rem;
    text-align: center;
  }

  .sub-title {
    margin-bottom: 2rem;

    font-size: 2rem;
    font-weight: lighter;
    text-align: center;
  }
`;

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  return (
    <SearchPageLayout>
      <h1 className="title">Gitstar Ranking</h1>
      <h3 className="sub-title">Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <SearchKeywordBox />
    </SearchPageLayout>
  );
};

export default SearchPage;
