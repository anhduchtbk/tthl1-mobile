import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const BASE_URL = 'https://k02.ichhoa.dev/api/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.log('Lỗi khi lấy token:', error);
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
