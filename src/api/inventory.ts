import axiosInstance from './axios';
import {
  GetEquipmentStatus,
  GetInventoryListByIdResponse,
  GetListInventoryRequest,
  GetListInventoryResponse,
} from './types/inventory';

export const getInventoryList = async (
  params: GetListInventoryRequest
): Promise<GetListInventoryResponse> => {
  const response = await axiosInstance.get('inventories', { params });

  return response.data;
};

export const getInventoryListById = async (
  inventory_id: number
): Promise<GetInventoryListByIdResponse> => {
  const response = await axiosInstance.get(`inventories/${inventory_id}`);

  return response.data;
};

export const getEquipmentStatus = async (
  equipmentId: number
): Promise<GetEquipmentStatus> => {
  const response = await axiosInstance.get(
    `inventories/equipment/${equipmentId}/status`
  );

  return response.data;
};
