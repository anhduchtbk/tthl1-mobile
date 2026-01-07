import { EDUCATION_TYPE, STATUS_TYPE } from '@/constants/value';
import { PaginationResponse } from '@/types/api';
import { User } from './auth';
import { Company } from './company';

export interface UserCompany extends User {
  company: Company;
}

export interface Transaction {
  id: number;
  quantity: number;
  status: STATUS_TYPE;
  type: 'borrow' | 'return';
  reason: string;
  rejectReason: string | null;
  user: UserCompany;
  borrowSource: {
    id: number;
    name: string;
    type: string;
  };
  approvedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

interface TrainingEquipment {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  description: string | null;
  image: string;
}

export interface TransactionPending extends Transaction {
  transactionType: 'BORROW' | 'RETURN';
  trainingEquipment: TrainingEquipment;
}

export interface TransactionsByType {
  type: 'borrow' | 'return';
  totalQuantity: number;
  transactions: Transaction[];
}

interface TransactionsByCompany {
  company: {
    id: number;
    name: string;
    course: {
      id: number;
      name: string;
      type: EDUCATION_TYPE;
    };
  };
  currentQuantity: number;
  transactionsByType: TransactionsByType[];
}

interface TransactionEquipment {
  id: number;
  name: string;
  image: string;
}

interface AvailableCompany {
  companyId: number;
  companyName: string;
  availableQuantity: number;
}

export interface GetTransactionEquipmentResponse {
  equipment: TransactionEquipment;
  totalBorrowedQuantity: number;
  totalInventoryQuantity: number;
  transactionsByCompany: TransactionsByCompany[];
}

export interface CreateTransactionRequest {
  trainingEquipmentId: number;
  type: 'BORROW' | 'RETURN';
  quantity: number;
  reason: string;
}

export interface CreateTransactionResponse {
  id: number;
  quantity: number;
  transactionType: 'BORROW' | 'RETURN';
  status: STATUS_TYPE;
  reason: string;
  rejectReason: string;
  user: {
    id: number;
    email: string;
  };
  trainingEquipment: {
    id: number;
    name: string;
    description: string;
  };
  approvedBy: {
    id: number;
    email: string;
  };
  approvedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateTransactionStatusRequest {
  status: STATUS_TYPE;
  rejectReason?: string;
}

export interface GetTransactionEquipmentByCompanyResponse {
  trainingEquipmentId: number;
  trainingEquipmentName: string;
  companyId: number;
  companyName: string;
  currentQuantityInCompany: number;
  transactions: Transaction[];
}

export type GetTransactionAvailableCompaniesResponse = AvailableCompany[];

export interface GetTransactionPendingRequest {
  order?: 'ASC' | 'DESC';
  page: number;
  limit: number;
}

export type GetTransactionPendingResponse =
  PaginationResponse<TransactionPending>;
