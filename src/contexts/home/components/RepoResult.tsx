import React, { useContext } from "react";
import styled from "styled-components";

import { Repository } from "~/utils/model/Repository";

import { HomeContext } from "../HomeContext";
import RepoItem from "./RepoItem";

const RepoResult = () => {
  const { username, repos, totalStars } = useContext(HomeContext);

  return (
    <RepoResultWrapper>
      {repos.length ? (
        <>
          <h1>{username}</h1>
          <h3>
            {repos.length}
            &nbsp;
            {repos.length > 1 ? "repositories" : "repository"}
            &nbsp;|&nbsp;
            {totalStars}
            &nbsp;
            {totalStars > 1 ? "stars" : "star"}
          </h3>
          <hr />
          <RepoList>
            {repos.map((repo: Repository) => (
              <RepoItem repo={repo} key={repo.name} />
            ))}
          </RepoList>
        </>
      ) : (
        <h3>결과가 없습니다.</h3>
      )}
    </RepoResultWrapper>
  );
};

export default RepoResult;

const RepoResultWrapper = styled.section`
  margin-top: 20px;
`;

const RepoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  border: 1px solid lightgray;

  > li:not(:first-child) {
    border-top: 1px solid lightgray;
  }
`;
