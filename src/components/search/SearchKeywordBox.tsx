import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '~/components/common/Button';
import Input from '~/components/common/Input';

import { isEnterKeyPressed } from '~/utils/etc';

/* Style */
const SearchKeywordBoxLayout = styled.div`
  display: flex;
  flex-direction: row;

  input {
    width: 20rem;

    margin-right: 1rem;
  }
`;

interface SearchKeywordBoxProps {
  search: (keyword: string) => void;
  initialKeyword: string;
}

const ButtonMemo = React.memo(Button);

const SearchKeywordBox: React.FC<SearchKeywordBoxProps> = ({ search, initialKeyword }) => {
  const [keyword, setKeyword] = useState<string>(initialKeyword);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleInputKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isEnterKeyPressed(e)) return;
    search(keyword);
  };

  const handleButtonClick = () => {
    search(keyword);
  };

  useEffect(() => {
    setKeyword(initialKeyword);
  }, [initialKeyword]);

  return (
    <SearchKeywordBoxLayout>
      <Input
        type="text"
        placeholder="Write user or organization name"
        value={keyword}
        onChange={handleInputChange}
        onKeyUp={handleInputKeyEvent}
      />
      <ButtonMemo onClick={handleButtonClick}>Search</ButtonMemo>
    </SearchKeywordBoxLayout>
  );
};

export default SearchKeywordBox;
