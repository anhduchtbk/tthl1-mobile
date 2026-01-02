import axiosInstance from './axios';
import { CreateTransactionRequest, CreateTransactionResponse, GetTransactionEquipmentResponse } from './types/transaction';

export const getTransactionEquipmentById = async (
  equipment_id: number
): Promise<GetTransactionEquipmentResponse> => {
  const response = await axiosInstance.get(
    `transactions/equipment/${equipment_id}`
  );

  return response.data;
};

export const createTransaction = async (
  data: CreateTransactionRequest
): Promise<CreateTransactionResponse> => {
  const response = await axiosInstance.post('transactions', data);

  return response.data;
};
