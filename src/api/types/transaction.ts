interface Transaction {
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

interface TransactionsByType {
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

export interface GetTransactionEquipmentResponse {
  equipment: {
    id: number;
    name: string;
  };
  totalBorrowedQuantity: number;
  transactionsByCompany: TransactionsByCompany[];
}
