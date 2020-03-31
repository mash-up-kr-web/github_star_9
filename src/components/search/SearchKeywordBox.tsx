import React from 'react';
import styled from 'styled-components';

import Button from '~/components/common/Button';
import Input from '~/components/common/Input';

const SearchKeywordBoxLayout = styled.div`
  display: flex;
  flex-direction: row;

  input {
    width: 20rem;

    margin-right: 1rem;
  }
`;

interface SearchKeywordBoxProps {}

const SearchKeywordBox: React.FC<SearchKeywordBoxProps> = () => {
  return (
    <SearchKeywordBoxLayout>
      <Input type="text" placeholder="Write user or organization name" />
      <Button>Search</Button>
    </SearchKeywordBoxLayout>
  );
};

export default SearchKeywordBox;
