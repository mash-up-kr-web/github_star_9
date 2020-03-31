import React from 'react';
import styled from 'styled-components';

import Button from '~/components/common/Button';
import Input from '~/components/common/Input';

const SearchPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  position: absolute;
  top: 30%;

  .title {
    font-size: 3rem;
  }

  .sub-title {
    font-size: 2rem;
  }
`;

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  return (
    <SearchPageLayout>
      <h1 className="title">Gitstar Ranking</h1>
      <h3 className="sub-title">Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <Input type="text" placeholder="Write user or organization name" />
      <Button>Search</Button>
    </SearchPageLayout>
  );
};

export default SearchPage;
