import { getCompaniesList } from '@/api/company';
import { COMPANY_QUERY_KEY } from '@/api/constants/company';
import { Company, GetListCompaniesRequest } from '@/api/types/company';
import { useInfinitePagination } from './useInfinitePagination';

export const useGetCompanyList = (params: GetListCompaniesRequest) => {
  return useInfinitePagination<Company, GetListCompaniesRequest>({
    queryKey: [COMPANY_QUERY_KEY.listCompanies, params],
    queryFn: getCompaniesList,
    initialParams: params,
  });
};
