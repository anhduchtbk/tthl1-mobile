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
    user: any;
    token: string;
  };
}
