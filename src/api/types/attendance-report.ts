import { PaginationResponse } from '@/types/api';
import { Student } from './student';

export interface GetListAttendanceReportsRequest {
  order?: string;
  page?: number;
  limit?: number;
}

export type GetListAttendanceReportsResponse = PaginationResponse<Student>;
