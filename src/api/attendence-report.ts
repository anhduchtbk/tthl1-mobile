import axiosInstance from './axios';
import {
  CreateAttendanceReportRequest,
  GetListAttendanceReportsRequest,
  GetListAttendanceReportsResponse,
} from './types/attendance-report';

export const getAttendanceList = async (
  params: GetListAttendanceReportsRequest
): Promise<GetListAttendanceReportsResponse> => {
  const response = await axiosInstance.get('attendance-reports', { params });

  return response.data;
};

export const createAttendanceReport = async (
  data: CreateAttendanceReportRequest
): Promise<CreateAttendanceReportRequest> => {
  const response = await axiosInstance.post('attendance-reports', data);

  return response.data;
};
