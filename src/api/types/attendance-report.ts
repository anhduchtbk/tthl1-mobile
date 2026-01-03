import { PaginationResponse } from '@/types/api';
import { Company } from './company';

export interface GetListAttendanceReportsRequest {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  filter?: string[];
}

interface AbsentGroup {
  studentIds?: number[];
  reseason?: string;
}

export interface CreateAttendanceReportRequest {
  personnelCount?: number;
  totalAbsent?: number;
  companyId?: number;
  session?: string;
  absentGroups?: AbsentGroup[];
}

export type GetListAttendanceReportsResponse = PaginationResponse<Company>;
