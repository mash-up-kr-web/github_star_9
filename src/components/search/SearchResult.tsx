import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

import { UserInfo, Repository } from '~/model';

/* Style */
const Header = styled.div`
  margin: 1rem 0;

  font-weight: lighter;
  text-align: center;

  .user-name {
    margin-bottom: 0.5rem;

    font-size: 5rem;
  }

  .user-metadata {
    font-size: 2rem;
  }
`;

const StyledRepositoryList = styled.ul`
  font-weight: lighter;

  list-style-type: none;
`;

const RepositoryItem = styled.li`
  margin: 0.5rem 0;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  border: 1px solid #e9e9e9;

  :hover {
    background-color: #dcdcdc;
    cursor: pointer;
  }

  .repository-name {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .repository-description {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

const StyledStarCount = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 1rem;

  .count {
    margin-left: 0.5rem;
  }
`;

/* Props */
interface SearchResultProps {
  userInfo?: UserInfo;
}

/* Components */
const StarCount: React.FC<{ count: number }> = ({ count }) => {
  return (
    <StyledStarCount>
      <FaStar />
      <span className="count">{count}</span>
    </StyledStarCount>
  );
};

const RepositoryList: React.FC<{ repositories: Repository[] }> = ({ repositories }) => {
  return (
    <StyledRepositoryList>
      {repositories.map(({ name, star, description }) => (
        <RepositoryItem key={name}>
          <span className="repository-name">{name}</span>
          {description && <span className="repository-description">{description}</span>}
          <StarCount count={star} />
        </RepositoryItem>
      ))}
    </StyledRepositoryList>
  );
};

const SearchResult: React.FC<SearchResultProps> = ({ userInfo }) => {
  if (!userInfo) return null;

  const { username, repositories, starCount } = userInfo;

  return (
    <section>
      <Header>
        <div className="user-name">{username}</div>
        <div className="user-metadata">
          {repositories.length} Repositories / {starCount} stars
        </div>
      </Header>
      <RepositoryList repositories={repositories} />
    </section>
  );
};

export default SearchResult;
