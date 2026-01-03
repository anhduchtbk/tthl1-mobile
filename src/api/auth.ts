import axiosInstance from './axios';
import { GetMeResponse, LoginRequest, LoginResponse } from './types/auth';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post('auth/login', data);
  
  return response;
};

export const getMe = async (): Promise<GetMeResponse> => {
  const response = await axiosInstance.get('users/me');
  
  return response;
};
