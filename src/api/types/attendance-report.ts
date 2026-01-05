import { REPORT_NUMBER_TYPE } from '@/constants/value';
import { PaginationResponse } from '@/types/api';
import { Company } from './company';
import { Student } from './student';

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

interface AttendanceRecord {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  reason: string;
  student: Student;
}

export interface AttendanceReport {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  reportTime: string;
  personnelCount: number;
  totalAbsent: number;
  session: REPORT_NUMBER_TYPE;
  company: Company;
  createdBy: any;
  attendanceRecords: AttendanceRecord[];
}

export type GetListAttendanceReportsResponse =
  PaginationResponse<AttendanceReport>;
