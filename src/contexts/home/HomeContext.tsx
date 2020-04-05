import React, {
  createContext,
  useState,
  Props,
  useMemo,
  useCallback,
} from "react";

import GithubService from "~/services/GithubService";
import { Repository } from "~/utils/model/Repository";

interface HomeContextValue {
  username: string;
  repos: Repository[];
  totalStars: number;
  searchRepo: (name: string) => void;
}

export const HomeContext = createContext({} as HomeContextValue);

export const HomeProvider = (props: Props<HTMLElement>) => {
  const { children } = props;

  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([] as Repository[]);
  const [totalStars, setTotalStars] = useState(0);

  const githubService = new GithubService();

  const searchRepo = useCallback(async (name: string) => {
    const res = await githubService.getRepos(name);
    setUsername(name);
    setRepos(res);
    setTotalStars(res.reduce((p, c) => p + (c.stargazersCount ?? 0), 0));
  }, [username]);

  const value = useMemo(
    () => ({
      username,
      repos,
      totalStars,
      searchRepo,
    }),
    [username, repos, totalStars],
  );

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
