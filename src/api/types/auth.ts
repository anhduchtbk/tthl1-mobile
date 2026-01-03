import { RANK_TYPE } from '@/constants/value';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  message?: {
    statusCode: number;
    message: string;
    error: string;
  };
  status: number;
  data: {
    email: string;
    token: string;
    role: {
      id: number;
      name: string;
      description: string;
      isActive: boolean;
    };
  };
}

export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  birthday: string;
  phoneNumber: string;
  rank: RANK_TYPE;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  role: {
    id: number;
    name: string;
    description: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    permissions: string[];
  };
}

export interface GetMeResponse {
  message?: {
    statusCode: number;
    message: string;
    error: string;
  };
  status: number;
  data: User;
}
