import axiosInstance from './axios';
import { GetStudentListRequest, GetStudentListResponse } from './types/student';

export const getStudentList = async (
  params: GetStudentListRequest
): Promise<GetStudentListResponse> => {
  const response = await axiosInstance.get('students', { params });

  return response.data;
};
