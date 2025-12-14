import axios from 'axios';

const API_BASE_URL = 'https://camra.herokuapp.com';

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
