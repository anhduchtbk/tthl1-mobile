import {
  createAttendanceReport,
  getAttendanceList,
} from '@/api/attendence-report';
import { ATTENDANCE_REPORT_QUERY_KEY } from '@/api/constants/attendance-report';
import {
  CreateAttendanceReportRequest,
  GetListAttendanceReportsRequest,
} from '@/api/types/attendance-report';
import { Company } from '@/api/types/company';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useInfinitePagination } from './useInfinitePagination';

export const useGetAttendanceList = (
  params: GetListAttendanceReportsRequest
) => {
  return useInfinitePagination<Company, GetListAttendanceReportsRequest>({
    queryKey: [ATTENDANCE_REPORT_QUERY_KEY.listAttendanceReport, params],
    queryFn: getAttendanceList,
    initialParams: params,
  });
};

export const useCreateAttendanceReport = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [ATTENDANCE_REPORT_QUERY_KEY.createAttendanceReport],
    mutationFn: (data: CreateAttendanceReportRequest) =>
      createAttendanceReport(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ATTENDANCE_REPORT_QUERY_KEY.listAttendanceReport],
      });
    },
  });
};
