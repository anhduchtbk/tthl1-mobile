import axiosInstance from './axios';
import {
  CreateAttendanceReport,
  GetListAttendanceReportsRequest,
  GetListAttendanceReportsResponse,
} from './types/attendance-report';

export const getAttendanceList = async (
  params: GetListAttendanceReportsRequest
): Promise<GetListAttendanceReportsResponse> => {
  const response = await axiosInstance.get('Attendance-reports', { params });

  return response.data;
};

export const createAttendanceReport = async (
  data: CreateAttendanceReport
): Promise<CreateAttendanceReport> => {
  const response = await axiosInstance.post('Attendance-reports', data);

  return response.data;
};
