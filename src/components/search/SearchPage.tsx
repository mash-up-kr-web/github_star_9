import React from 'react';

import Button from '~/components/common/Button';

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  return (
    <main>
      <h1>Gitstar Ranking</h1>
      <h3>Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <input type="text" />
      <Button>Search</Button>
    </main>
  );
};

export default SearchPage;
