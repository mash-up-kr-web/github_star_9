import axios from 'axios';

export const getStar = (username: string) => axios.get(`https://api.github.com/users/${username}/starred`);