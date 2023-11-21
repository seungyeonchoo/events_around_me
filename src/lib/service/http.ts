import axios from 'axios';

const axiosConfig = {
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const instance = axios.create(axiosConfig);

export default instance;
