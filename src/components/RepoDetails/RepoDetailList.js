import React from "react";
import RepoDetail from "./RepoDetail";

const RepoDetailList = props => {
  const { repos } = props;
  repos.sort(function(a, b) {
    return b.stargazers_count - a.stargazers_count;
  });

  return (
    <div>
      {repos.map(repo => (
        <RepoDetail
          key={repo.id}
          name={repo.name}
          stargazers_count={repo.stargazers_count}
        />
      ))}
    </div>
  );
};

export default RepoDetailList;
