import React, { useState } from 'react';
import SearchBar from '@molecules/SearchBar';
import SearchResult from '@organisms/SearchResult';

import * as api from 'apis';

export default function GitStarRanking() {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);

  const onSearch = word => {
    api.getRepos(word).then(({ owner, repos }) => {
      setKeyword(owner);
      setResult(repos);
    });
  };

  return (
    <>
      <h1>GitStar Ranking</h1>
      <p>
        Unofficial GitHub star ranking for users, organizations and
        repositories.
      </p>
      <SearchBar onSearch={onSearch} />
      <SearchResult
        name={keyword}
        resultItems={result}
        repoCount={result.length}
        starCount={result.reduce((acc, cur) => acc + cur.starCount, 0)}
      />
    </>
  );
}
