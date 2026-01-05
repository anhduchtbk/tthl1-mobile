import {
  createAttendanceReport,
  getAttendanceReportList,
} from '@/api/attendence-report';
import { ATTENDANCE_REPORT_QUERY_KEY } from '@/api/constants/attendance-report';
import {
  AttendanceReport,
  CreateAttendanceReportRequest,
  GetListAttendanceReportsRequest,
} from '@/api/types/attendance-report';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useInfinitePagination } from './useInfinitePagination';

export const useGetAttendanceReportList = (
  params: GetListAttendanceReportsRequest
) => {
  return useInfinitePagination<
    AttendanceReport,
    GetListAttendanceReportsRequest
  >({
    queryKey: [ATTENDANCE_REPORT_QUERY_KEY.listAttendanceReport, params],
    queryFn: getAttendanceReportList,
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
