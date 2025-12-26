import axiosInstance from './axios';
import {
  GetListAttendanceReportsRequest,
  GetListAttendanceReportsResponse,
} from './types/attendance-report';

export const getAttendanceList = async (
  params: GetListAttendanceReportsRequest
): Promise<GetListAttendanceReportsResponse> => {
  const response = await axiosInstance.get('Attendance-reports', { params });

  return response.data;
};
