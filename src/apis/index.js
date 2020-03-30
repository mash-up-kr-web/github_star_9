import API from './APIutils';

export function getRepos(keyword) {
  const payload = API.get(`/users/${keyword}/repos`).then(({ data }) =>
    data.map(({ id, name, description, url, stargazers_count }) => ({
      id,
      name,
      description,
      url,
      starCount: stargazers_count,
    })),
  );

  return payload;
}
