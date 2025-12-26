import { PaginationResponse } from '@/types/api';

export interface Company {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  personnelCount: number;
}

export interface GetListCompaniesRequest {
  search?: string;
  page?: number;
  limit?: number;
  sort?: string[];
  filter?: string[];
}

export type GetListCompaniesResponse = PaginationResponse<Company>;
