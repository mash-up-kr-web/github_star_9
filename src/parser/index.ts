/* eslint-disable @typescript-eslint/camelcase */
import { RepositoriesRes } from '~/utils/api';
import { UserInfo } from '~/model';

export const parseUserInfo = (username: string, repositoriesRes: RepositoriesRes[]): UserInfo => {
  const repositories = repositoriesRes.map(({ name, stargazers_count, description, html_url }) => {
    return { name, star: stargazers_count, description, link: html_url };
  });
  const starCount = repositories.reduce((count, { star }) => count + star, 0);

  return { username, repositories, starCount };
};
