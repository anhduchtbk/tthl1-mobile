import { TIMETABLE_QUERY_KEY } from '@/api/constants/timetable';
import { getTimetableByCompanyList, getTimetableList } from '@/api/timetable';
import {
    GetTimetableByCompanyListRequest,
    GetTimetableListRequest,
    Timetable,
} from '@/api/types/timetable';
import { useQuery } from '@tanstack/react-query';
import { useInfinitePagination } from './useInfinitePagination';

export const useGetTimetableList = (params: GetTimetableListRequest) => {
  return useInfinitePagination<Timetable, GetTimetableListRequest>({
    queryKey: [TIMETABLE_QUERY_KEY.listTimetableByCompany, params],
    queryFn: getTimetableList,
    initialParams: params,
  });
};

export const useGetTimetableByCompanyList = (
  params: GetTimetableByCompanyListRequest
) => {
  return useQuery({
    queryKey: [TIMETABLE_QUERY_KEY.listTimetableByCompany, params],
    queryFn: () => getTimetableByCompanyList(params),
    enabled: !!params.companyId,
  });
};
