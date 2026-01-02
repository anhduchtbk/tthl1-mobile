import axiosInstance from './axios';
import {
    GetTimetableByCompanyListRequest,
    GetTimetableByCompanyListResponse,
    GetTimetableListRequest,
    GetTimetableListResponse,
} from './types/timetable';

export const getTimetableList = async (
  params: GetTimetableListRequest
): Promise<GetTimetableListResponse> => {
  const response = await axiosInstance.get('timetable', { params });

  return response.data;
};

export const getTimetableByCompanyList = async (
  params: GetTimetableByCompanyListRequest
): Promise<GetTimetableByCompanyListResponse> => {
  const response = await axiosInstance.get(
    `timetable/company/${params.companyId}`
  );

  return response.data;
};
