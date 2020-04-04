import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '~/components/common/Button';
import Input from '~/components/common/Input';

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
  const history = useHistory();

  const [keyword, setKeyword] = useState<string>(initialKeyword);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleInputKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) return;
    search(keyword);
  };

  const handleButtonClick = () => {
    search(keyword);
  };

  useEffect(() => {
    history.listen((location) => {
      const username = new URLSearchParams(location.search).get('username');
      if (username) setKeyword(username);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
