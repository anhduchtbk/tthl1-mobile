import axiosInstance from './axios';
import {
  GetStudentListRequest,
  GetStudentListResponse,
  Student,
} from './types/student';

export const getStudentList = async (
  params: GetStudentListRequest
): Promise<GetStudentListResponse> => {
  const response = await axiosInstance.get('students', { params });

  return response.data;
};

export const getStudentDetail = async (id: number): Promise<Student> => {
  const response = await axiosInstance.get(`students/${id}`);

  return response.data;
};
