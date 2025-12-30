import { TRANSACTION_QUERY_KEY } from '@/api/constants/transaction';
import { getTransactionEquipmentById } from '@/api/transaction';
import { useQuery } from '@tanstack/react-query';

export const useGetTransactionEquipmentById = (equipment_id: number) => {
  return useQuery({
    queryKey: [
      TRANSACTION_QUERY_KEY.listTransactionEquipmentById,
      equipment_id,
    ],
    queryFn: () => getTransactionEquipmentById(equipment_id),
    enabled: !!equipment_id,
  });
};
