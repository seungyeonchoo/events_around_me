import axios from 'axios';

const axiosConfig = {
  baseURL: 'http://localhost:4000',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(axiosConfig);

export default instance;
