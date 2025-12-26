import axiosInstance from './axios';
import {
  GetListCompaniesRequest,
  GetListCompaniesResponse,
} from './types/company';

export const getCompaniesList = async (
  params: GetListCompaniesRequest
): Promise<GetListCompaniesResponse> => {
  const response = await axiosInstance.get('companies', { params });

  return response.data;
};
