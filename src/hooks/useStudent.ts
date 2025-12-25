import { STUDENT_QUERY_KEY } from '@/api/constants/student';
import { getStudentDetail, getStudentList } from '@/api/student';
import { GetStudentListRequest, Student } from '@/api/types/student';
import { useQuery } from '@tanstack/react-query';
import { useInfinitePagination } from './useInfinitePagination';

export const useGetStudentList = (params: GetStudentListRequest) => {
  return useInfinitePagination<Student, GetStudentListRequest>({
    queryKey: [STUDENT_QUERY_KEY.listStudent, params],
    queryFn: getStudentList,
    initialParams: params,
  });
};

export const UseGetStudentDetail = (id: number) => {
  return useQuery({
    queryKey: [STUDENT_QUERY_KEY.studentDetail, id],
    queryFn: () => getStudentDetail(id),
    enabled: !!id,
  });
};
