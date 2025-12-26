import { getAttendanceList } from '@/api/attendence-report';
import { ATTENDANCE_REPORT_QUERY_KEY } from '@/api/constants/attendance-report';
import { GetListAttendanceReportsRequest } from '@/api/types/attendance-report';
import { Student } from '@/api/types/student';
import { useInfinitePagination } from './useInfinitePagination';

export const useGetStudentList = (params: GetListAttendanceReportsRequest) => {
  return useInfinitePagination<Student, GetListAttendanceReportsRequest>({
    queryKey: [ATTENDANCE_REPORT_QUERY_KEY.listAttendanceReport, params],
    queryFn: getAttendanceList,
    initialParams: params,
  });
};
