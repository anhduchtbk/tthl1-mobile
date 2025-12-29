import axiosInstance from './axios';
import { Student } from './types/student';

export const getTransactionEquipmentById = async (
  equipment_id: number
): Promise<Student> => {
  const response = await axiosInstance.get(
    `transactions/equipment/${equipment_id}`
  );

  return response.data;
};
