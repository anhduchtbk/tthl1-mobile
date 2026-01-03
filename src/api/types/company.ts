import { EDUCATION_TYPE } from '@/constants/value';
import { PaginationResponse } from '@/types/api';

export interface Course {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  type: EDUCATION_TYPE;
  startDate: string;
  endDate: string;
}

export interface Company {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  personnelCount: number;
  course: Course;
}

export interface GetListCompaniesRequest {
  search?: string;
  page?: number;
  limit?: number;
  sort?: string[];
  filter?: string[];
}

export type GetListCompaniesResponse = PaginationResponse<Company>;
