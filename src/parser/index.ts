/* eslint-disable @typescript-eslint/camelcase */
import { RepositoriesRes } from '~/utils/api';

export const parseUserInfo = (username: string, repositoriesRes: RepositoriesRes[]) => {
  const repositories = repositoriesRes.map(({ name, stargazers_count }) => {
    return { name, star: stargazers_count };
  });
  const starCount = repositories.reduce((count, { star }) => count + star, 0);

  return { username, repositories, starCount };
};
