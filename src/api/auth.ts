import axiosInstance from './axios';
import { LoginRequest, LoginResponse } from './types/auth';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post('auth/login', data);
  
  return response;
};
