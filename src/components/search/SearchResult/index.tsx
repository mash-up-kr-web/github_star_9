import React from 'react';
import { FaStar } from 'react-icons/fa';

import Styled from './style';

import { UserInfo, Repository } from '~/model';

/* Props */
interface SearchResultProps {
  userInfo?: UserInfo;
}

/* Components */
const StarCount: React.FC<{ count: number }> = ({ count }) => {
  return (
    <Styled.StarCount>
      <FaStar />
      <span className="count">{count}</span>
    </Styled.StarCount>
  );
};

const RepositoryList: React.FC<{ repositories: Repository[] }> = ({ repositories }) => {
  return (
    <Styled.RepositoryList>
      {repositories.map(({ name, star, description }) => (
        <Styled.RepositoryItem key={name}>
          <span className="repository-name">{name}</span>
          {description && <span className="repository-description">{description}</span>}
          <StarCount count={star} />
        </Styled.RepositoryItem>
      ))}
    </Styled.RepositoryList>
  );
};

const SearchResult: React.FC<SearchResultProps> = ({ userInfo }) => {
  if (!userInfo) return null;

  const { username, repositories, starCount } = userInfo;

  return (
    <section>
      <Styled.UserMetadata>
        <div className="user-name">{username}</div>
        <div className="user-repo-stars">
          {repositories.length} Repositories / {starCount} stars
        </div>
      </Styled.UserMetadata>
      <RepositoryList repositories={repositories} />
    </section>
  );
};

export default SearchResult;
