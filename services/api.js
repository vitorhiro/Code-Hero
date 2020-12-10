import axios from 'axios';
import md5 from 'md5';

import { publicKey, privateKey, timeStamp } from './constants';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

const hash = md5(timeStamp + privateKey + publicKey);

export default {
  async getHeroes(limit) {
    const response = await api
      .get(
        `/characters?limit=${limit}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
      )
      .then(null, (error) => error);

    return response.data;
  },
};
