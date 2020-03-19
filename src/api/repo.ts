import axios from 'axios';

export const getRepo = (username: string) => axios.get(`https://api.github.com/users/${username}/repos`);