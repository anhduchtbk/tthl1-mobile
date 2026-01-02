import axiosInstance from './axios';
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  GetTransactionEquipmentByCompanyResponse,
  GetTransactionEquipmentResponse,
  UpdateTransactionStatusRequest,
} from './types/transaction';

export const getTransactionByEquipment = async (
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

export const updateTransactionStatus = async (
  transationId: number,
  params: UpdateTransactionStatusRequest
): Promise<any> => {
  const response = await axiosInstance.post(
    `transactions/${transationId}/update-status`,
    params
  );

  return response.data;
};

export const getTransactionEquipmentByCompany = async (
  equipmentId: number,
  companyId: number
): Promise<GetTransactionEquipmentByCompanyResponse> => {
  const response = await axiosInstance.get(
    `transactions/equipment/${equipmentId}/company/${companyId}`
  );

  return response.data;
};
