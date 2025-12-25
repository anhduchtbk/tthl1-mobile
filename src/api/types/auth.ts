export interface LoginRequest {
  email: string;
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
    }
  };
}
