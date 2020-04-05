import API from './APIutils';

export function getRepos(keyword) {
  return API.get(`/users/${keyword}/repos`).then(({ data }) => {
    const owner = data.length && data[0].owner.login;

    const repos = data.map(
      ({ id, name, description, url, stargazers_count: starCount }) => ({
        id,
        name,
        description,
        url,
        starCount,
      }),
    );

    return {
      owner,
      repos,
    };
  });
}
