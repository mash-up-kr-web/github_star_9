import React, { useState } from 'react';
import Spinner from '@atoms/Spinner';
import NotFound from '@atoms/NotFound';
import SearchBar from '@molecules/SearchBar';
import SearchResult from '@organisms/SearchResult';

import * as api from 'apis';

const PageBody = ({ status: { isLoading, is404 }, ...rest }) => {
  if (isLoading) return <Spinner />;
  if (is404) return <NotFound />;

  return <SearchResult {...rest} />;
};

export default function GitStarRanking() {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [is404, setIs404] = useState(false);

  const onSearch = word => {
    setLoading(true);
    setIs404(false);
    api
      .getRepos(word)
      .then(({ owner, repos }) => {
        setKeyword(owner);
        setResult(repos);
      })
      .catch(err => {
        if (err.response.status === 404) setIs404(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <main>
      <h1>GitStar Ranking</h1>
      <p>
        Unofficial GitHub star ranking for users, organizations and
        repositories.
      </p>
      <SearchBar onSearch={onSearch} />
      <PageBody
        status={{ isLoading, is404 }}
        name={keyword}
        resultItems={result}
        repoCount={result.length}
        starCount={result.reduce((acc, cur) => acc + cur.starCount, 0)}
      />
    </main>
  );
}
