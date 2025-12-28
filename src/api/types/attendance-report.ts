import { PaginationResponse } from '@/types/api';
import { Company } from './company';

export interface GetListAttendanceReportsRequest {
  order?: string;
  page?: number;
  limit?: number;
}

interface AbsentGroup {
  studentIds?: number[];
  reseason?: string;
}

export interface CreateAttendanceReport {
  personnelCount?: number;
  totalAbsent?: number;
  companyId?: number;
  session?: string;
  absentGroups?: AbsentGroup[];
}

export type GetListAttendanceReportsResponse = PaginationResponse<Company>;
