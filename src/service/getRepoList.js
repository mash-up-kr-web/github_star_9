import axios from 'axios';

export const getRepoList = async(userName) => {
  return await axios.get(
    `https://api.github.com/users/${userName}/repos`
  ).then(({data}) => {
    const result = data.map(({
      id,
      name,
      stargazers_count
    }) => ({
      id,
      name,
      starCount: stargazers_count
    }))
    return result;
  }).catch(e => {
    console.log(e)
    return;
  })
}