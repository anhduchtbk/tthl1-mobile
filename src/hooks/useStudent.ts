import { STUDENT_QUERY_KEY } from '@/api/constants/student';
import { getStudentList } from '@/api/student';
import { GetStudentListRequest, Student } from '@/api/types/student';
import { useInfinitePagination } from './useInfinitePagination';

export const useGetStudentList = (params: GetStudentListRequest) => {
  // return useQuery({
  //   queryKey: [StudentQueryKey.listStudent, params],
  //   queryFn: () => getStudentList(params),
  // });

  return useInfinitePagination<Student, GetStudentListRequest>({
    queryKey: [STUDENT_QUERY_KEY.listStudent, params],
    queryFn: getStudentList,
    initialParams: params,
  });
};
