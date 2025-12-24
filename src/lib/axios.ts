import axios from 'axios';

const API_BASE_URL = 'http://104.43.108.3:3000/api';

const baseConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

export const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}`,
  ...baseConfig,
});
