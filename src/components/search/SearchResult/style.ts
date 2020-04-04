import styled from 'styled-components';

const UserMetadata = styled.div`
  margin: 1rem 0;

  font-weight: lighter;
  text-align: center;

  .user-name {
    margin-bottom: 0.5rem;

    font-size: 5rem;
  }

  .user-repo-stars {
    font-size: 2rem;
  }
`;

const RepositoryList = styled.ul`
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

const StarCount = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 1rem;

  .count {
    margin-left: 0.5rem;
  }
`;

export default { UserMetadata, RepositoryList, RepositoryItem, StarCount };
