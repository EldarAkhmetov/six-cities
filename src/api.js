import axios from 'axios';

const createApi = () => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  return api;
};

export default createApi;
