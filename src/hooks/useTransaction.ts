import { TRANSACTION_QUERY_KEY } from '@/api/constants/transaction';
import {
  createTransaction,
  getTransactionByEquipment,
  getTransactionEquipmentByCompany,
  updateTransactionStatus,
} from '@/api/transaction';
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
  UpdateTransactionStatusRequest,
} from '@/api/types/transaction';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetTransactionByEquipment = (equipment_id: number) => {
  return useQuery({
    queryKey: [TRANSACTION_QUERY_KEY.listTransactionByEquipment, equipment_id],
    queryFn: () => getTransactionByEquipment(equipment_id),
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
          TRANSACTION_QUERY_KEY.listTransactionByEquipment,
          data?.trainingEquipment?.id,
        ],
      });
    },
  });
};

export const useGetTransactionEquipmentByCompany = (
  equipmentId: number,
  companyId: number
) => {
  return useQuery({
    queryKey: [
      TRANSACTION_QUERY_KEY.listTransactionEquipmentByCompany,
      equipmentId,
      companyId,
    ],
    queryFn: () => getTransactionEquipmentByCompany(equipmentId, companyId),
    enabled: !!equipmentId && !!companyId,
  });
};

export const useUpdateTransactionStatus = (transactionId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [TRANSACTION_QUERY_KEY.updateTransactionStatus, transactionId],
    mutationFn: (data: UpdateTransactionStatusRequest) =>
      updateTransactionStatus(transactionId, data),
    onSuccess: (data: any) => {
      // queryClient.invalidateQueries({
      //   queryKey: [
      //     TRANSACTION_QUERY_KEY.listTransactionByEquipment,
      //     data?.trainingEquipment?.id,
      //   ],
      // });
    },
  });
};
