import React, { useCallback } from "react";
import styled from "styled-components";

import { Repository } from "~/utils/model/Repository";

interface RepoItemProps {
  repo: Repository;
}

const RepoItem = ({ repo }: RepoItemProps) => {
  const handleColumnClick = useCallback(
    (url?: string) => () => {
      if (url) {
        window.open(url, "_blank");
      }
    },
    [repo],
  );

  return (
    <Column onClick={handleColumnClick(repo.url)}>
      {repo.name}
      <StarContent>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path d="M8 .2l4.9 15.2L0 6h16L3.1 15.4z" fill="currentColor" />
        </svg>
        {repo.stargazersCount}
      </StarContent>
    </Column>
  );
};

export default RepoItem;

const Column = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  color: gray;
`;

const StarContent = styled.div`
  float: right;
`;
