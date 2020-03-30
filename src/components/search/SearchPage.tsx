import React from 'react';

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = () => {
  return (
    <main>
      <h1>Gitstar Ranking</h1>
      <h3>Unofficial GitHub star ranking for users, organizations and repositories.</h3>
      <input type="text" />
      <button type="button">Search</button>
    </main>
  );
};

export default SearchPage;
