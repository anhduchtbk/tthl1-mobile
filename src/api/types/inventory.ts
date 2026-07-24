import { PaginationResponse } from '@/types/api';

export interface Inventory {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  deletedAt?: null;
  description?: string;
}

export interface GetListInventoryRequest {
  order?: 'ASC' | 'DESC';
  page?: number;
  limit?: number;
}

interface Course {
  name: string;
  type: string; // ví dụ: 'van_bang_2'
}

interface CompanyStatus {
  id: number;
  name: string;
  course: Course;
}

interface LentToItem {
  company: CompanyStatus;
  quantity: number;
}

export interface GetEquipmentStatus {
  equipmentId: number;
  name: string;
  totalAmount: number;
  lent: number;
  remain: number;
  lentTo: LentToItem[];
}

export interface Equipment {
  id: number;
  name: string;
  quantity: number;
  remain: number;
  note: string;
}

export interface Manager {
  id: number;
  email: string;
  fullName: string;
  role: {
    id: number;
    name: string;
  };
}

export interface GetInventoryListByIdRequest {
  id: number;
}

export interface GetInventoryListByIdResponse {
  id: number;
  name: string;
  description: string;
  equipments: Equipment[];
  manager: Manager;
}

export type GetListInventoryResponse = PaginationResponse<Inventory>;
