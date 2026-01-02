export interface Transaction {
  id: number;
  quantity: number;
  status: 'approved';
  type: 'borrow' | 'return';
  reason: string;
  user: {
    id: number;
    email: string;
  };
  approvedAt: string;
  createdAt: string;
  updatedAt: string;
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
  };
  currentQuantity: number;
  transactionsByType: TransactionsByType[];
}

interface TransactionEquipment {
  id: number;
  name: string;
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
  status: 'pending' | 'approved' | 'rejected';
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
  status: 'approved' | 'rejected';
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
