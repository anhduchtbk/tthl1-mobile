import { TRANSACTION_QUERY_KEY } from '@/api/constants/transaction';
import {
  createTransaction,
  getTransactionEquipmentById,
} from '@/api/transaction';
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
} from '@/api/types/transaction';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TRANSACTION_QUERY_KEY.createTransaction],
    mutationFn: (data: CreateTransactionRequest) => createTransaction(data),
    onSuccess: (data: CreateTransactionResponse) => {
      queryClient.invalidateQueries({
        queryKey: [
          TRANSACTION_QUERY_KEY.listTransactionEquipmentById,
          data?.trainingEquipment?.id,
        ],
      });
    },
  });
};
