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

export const getStudentDetail = async (
  student_id: number
): Promise<Student> => {
  const response = await axiosInstance.get(`students/${student_id}`);

  return response.data;
};
