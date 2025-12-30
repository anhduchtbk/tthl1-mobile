import axiosInstance from './axios';
import { GetTransactionEquipmentResponse } from './types/transaction';

export const getTransactionEquipmentById = async (
  equipment_id: number
): Promise<GetTransactionEquipmentResponse> => {
  const response = await axiosInstance.get(
    `transactions/equipment/${equipment_id}`
  );

  return response.data;
};
