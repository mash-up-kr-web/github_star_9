import React from 'react';
import { FaStar } from 'react-icons/fa';

import Styled from './style';

import { UserInfo, Repository } from '~/model';

/* Props */
interface SearchResultProps {
  userInfo: UserInfo;
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
      {repositories.map(({ name, star, description, link }) => (
        <li key={name}>
          <Styled.RepositoryItem href={link}>
            <span className="repository-name">{name}</span>
            {description && <span className="repository-description">{description}</span>}
            <StarCount count={star} />
          </Styled.RepositoryItem>
        </li>
      ))}
    </Styled.RepositoryList>
  );
};

const SearchResult: React.FC<SearchResultProps> = ({ userInfo }) => {
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
