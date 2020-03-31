import React from 'react';

import Button from '~/components/common/Button';
import Input from '~/components/common/Input';

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  return (
    <main>
      <h1>Gitstar Ranking</h1>
      <h3>Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <Input type="text" placeholder="Write user or organization name" />
      <Button>Search</Button>
    </main>
  );
};

export default SearchPage;
