import { parseUserInfo } from '~/parser';

enum HttpMethod {
  Get = 'Get',
  Post = 'Post',
}

interface Option {
  method: HttpMethod;
}

const GITHUB_API_BASE_URL = 'https://api.github.com';

const apiPaths = {
  repositories: (name: string) => `/users/${name}/repos`,
};

const request = <T>(path: string, option: Option) => {
  return fetch(`${GITHUB_API_BASE_URL}${path}`, option).then((res) => res.json() as Promise<T>);
};

/* Get user info */
export interface RepositoriesRes {
  name: string;
  stargazers_count: number;
  description: string;
}

const getUserInfo = async (username: string) => {
  const option = {
    method: HttpMethod.Get,
  };

  const repositories = await request<RepositoriesRes[]>(apiPaths.repositories(username), option);
  return parseUserInfo(username, repositories);
};

export default { getUserInfo };
