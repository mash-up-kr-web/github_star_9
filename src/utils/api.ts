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

/* Get user's repositories */
export interface RepositoriesRes {
  name: string;
  stargazers_count: number;
}

const getRepositories = async (name: string) => {
  const option = {
    method: HttpMethod.Get,
  };

  return request<RepositoriesRes[]>(apiPaths.repositories(name), option);
};

export default { getRepositories };
