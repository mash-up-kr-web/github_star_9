import { useState, useCallback } from "react";

import GithubService from "~/services/GithubService";
import { Repository } from "~/utils/model/Repository";

const useHomeStore = () => {
  const githubService = new GithubService();

  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState<Repository[]>([]);

  const onRepoSearch = useCallback(async () => {
    const res = await githubService.getRepos(username);
    setRepos(res);
  }, [username]);

  return {
    username,
    setUsername,
    onRepoSearch,
  };
};

export default useHomeStore;
