/* eslint-disable @typescript-eslint/camelcase */
import { RepositoriesRes } from '~/utils/api';
import { UserInfo } from '~/model';

export const parseUserInfo = (username: string, repositoriesRes: RepositoriesRes[]): UserInfo => {
  const repositories = repositoriesRes.map(({ name, stargazers_count, description }) => {
    return { name, star: stargazers_count, description };
  });
  const starCount = repositories.reduce((count, { star }) => count + star, 0);

  return { username, repositories, starCount };
};
