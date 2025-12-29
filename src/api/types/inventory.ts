import { PaginationResponse } from '@/types/api';

export interface Inventory {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  deletedAt?: null;
  description: string;
}

export interface GetListInventoryRequest {
  order?: 'ASC' | 'DESC';
  page?: number;
  limit?: number;
}

export interface Equipment {
  id: number;
  name: string;
  quantity: number;
  remain: number;
  note: string;
}

export interface GetInventoryListByIdRequest {
  id: number;
}

export interface GetInventoryListByIdResponse {
  id: number;
  name: string;
  description: string;
  equipments: Equipment[];
}

export type GetListInventoryResponse = PaginationResponse<Inventory>;
