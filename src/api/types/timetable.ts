import { RANK_TYPE, SCHEDULE_TYPE } from '@/constants/value';
import { PaginationResponse } from '@/types/api';
import { Company } from './company';

export interface Subject {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  description: string;
  isActive: boolean;
}

export interface Teacher {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  email: string;
  fullName: string;
  phoneNumber: string;
  rank: RANK_TYPE;
  isActive: boolean;
}

export interface Timetable {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  companyId: number;
  date: string;
  session: SCHEDULE_TYPE;
  subjectId: number;
  content: string;
  teacherId: number;
  startTime: string;
  endTime: string;
  isActive: boolean;
  subject: Subject;
  teacher: Teacher;
  company: Company;
}

export interface GetTimetableListRequest {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  filter?: string[];
}

export type GetTimetableListResponse = PaginationResponse<Timetable>;

export interface GetTimetableByCompanyListRequest {
  companyId: number;
  fromDate?: string;
  toDate?: string;
}

export type GetTimetableByCompanyListResponse = Timetable[];
