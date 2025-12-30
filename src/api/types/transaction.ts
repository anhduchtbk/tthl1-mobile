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
