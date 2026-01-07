import axiosInstance from './axios';
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  GetTransactionAvailableCompaniesResponse,
  GetTransactionEquipmentByCompanyResponse,
  GetTransactionEquipmentResponse,
  GetTransactionPendingRequest,
  GetTransactionPendingResponse,
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

export const getTransactionAvailableCompanies = async (
  equipment_id: number
): Promise<GetTransactionAvailableCompaniesResponse> => {
  const response = await axiosInstance.get(
    `transactions/equipment/${equipment_id}/available-companies`
  );

  return response.data;
};

export const getTransactionPending = async (
  params: GetTransactionPendingRequest
): Promise<GetTransactionPendingResponse> => {
  const response = await axiosInstance.get('transactions/pending/approval', {
    params,
  });

  return response.data;
};

export const getTransactionDetail = async (
  transactionId: number
): Promise<GetTransactionEquipmentResponse> => {
  const response = await axiosInstance.get(`transactions/${transactionId}`);

  return response.data;
};
