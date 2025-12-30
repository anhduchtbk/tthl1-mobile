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

export const UseGetStudentDetail = (student_id: number) => {
  return useQuery({
    queryKey: [STUDENT_QUERY_KEY.studentDetail, student_id],
    queryFn: () => getStudentDetail(student_id),
    enabled: !!student_id,
  });
};
