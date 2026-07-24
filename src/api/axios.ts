import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const BASE_URL = 'https://api.tthl1.xyz/api/';

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
    const status = error.response?.status;
    const data = error.response?.data;

    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('token');
    }
    return Promise.reject({
      status,
      data,
      message: data?.message || error.message,
    });
  }
);

export default axiosInstance;
