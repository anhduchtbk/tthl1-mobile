import { INVENTORY_QUERY_KEY } from '@/api/constants/inventory';
import { getInventoryList, getInventoryListById } from '@/api/inventory';
import { GetListInventoryRequest, Inventory } from '@/api/types/inventory';
import { useQuery } from '@tanstack/react-query';
import { useInfinitePagination } from './useInfinitePagination';

export const useGetInventoryList = (params: GetListInventoryRequest) => {
  return useInfinitePagination<Inventory, GetListInventoryRequest>({
    queryKey: [INVENTORY_QUERY_KEY.listInventory, params],
    queryFn: getInventoryList,
    initialParams: params,
  });
};

export const useGetInventoryListById = (inventory_id: number) => {
  return useQuery({
    queryKey: [INVENTORY_QUERY_KEY.listInventoryById, inventory_id],
    queryFn: () => getInventoryListById(inventory_id),
    enabled: !!inventory_id,
  });
};
