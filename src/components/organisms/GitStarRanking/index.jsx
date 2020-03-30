import React, { useState } from 'react';
import { SearchBar } from '@molecules';
import { SearchResult } from '@organisms';

import * as api from 'apis';

export default function GitStarRanking() {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);

  const onSearch = keyword => {
    setKeyword(keyword);
    api
      .getRepos(keyword)
      .then(data => {
        setResult(data);
      })
      .catch(err => console.error(err));
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
        starCount={result.reduce((acc, cur) => (acc += cur.starCount), 0)}
      />
    </>
  );
}
