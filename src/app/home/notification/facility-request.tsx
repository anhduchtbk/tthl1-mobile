import { TransactionPending } from '@/api/types/transaction';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { STATUS_TYPE } from '@/constants/value';
import AcceptRequestModal from '@/features/home/notification/AcceptRequestModal';
import RejectRequestModal from '@/features/home/notification/RejectRequestModal';
import { RenderRequestItem } from '@/features/home/notification/RenderRequestItem';
import { formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
import dayjs from 'dayjs';
import { useSearchParams } from 'expo-router/build/hooks';
import React, { useState } from 'react';

export default function FacilityRequestScreen() {
  const searchParams = useSearchParams();
  const transactionItem = JSON.parse(
    searchParams.get('transactionItem') || ''
  ) as TransactionPending;

  const [isOpenAcceptModal, setIsOpenAcceptModal] = useState(false);
  const [isOpenRejectModal, setIsOpenRejectModal] = useState(false);

  const [transactionDetail, setTransactionDetail] = useState(transactionItem);

  const onOpenAcceptModal = () => {
    setIsOpenAcceptModal(true);
  };

  const onOpenRejectModal = () => {
    setIsOpenRejectModal(true);
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader
        title={`YÊU CẦU ${
          transactionDetail?.transactionType === 'BORROW' ? 'MƯỢN' : 'TRẢ'
        }`}
        subTitle={transactionDetail?.trainingEquipment?.name?.toUpperCase()}
        subTitleBold
      />
      <Box mt={20} px={16}>
        <RenderRequestItem
          rowItem={formatData(transactionDetail)}
          isConfirm={Boolean(transactionDetail?.status === STATUS_TYPE.PENDING)}
          onAcceptRequest={onOpenAcceptModal}
          onRejectRequest={onOpenRejectModal}
        />
      </Box>
      <RejectRequestModal
        transactionItem={transactionDetail}
        isVisible={isOpenRejectModal}
        onClose={() => setIsOpenRejectModal(false)}
        onConfirm={setTransactionDetail}
      />
      <AcceptRequestModal
        transactionItem={transactionDetail}
        isVisible={isOpenAcceptModal}
        onClose={() => setIsOpenAcceptModal(false)}
        onConfirm={setTransactionDetail}
      />
    </Box>
  );
}

const formatData = (transaction: TransactionPending) => {
  return {
    infos: [
      {
        title: 'Đơn vị yêu cầu',
        type: 'requestedUnit',
        value: `C${transaction?.user?.company?.name} - ${formatEducation(
          transaction?.user?.company?.course?.type || ''
        )}`,
      },
      {
        title: 'Người yêu cầu',
        type: 'requester',
        value: transaction?.user?.fullName,
      },
      {
        title: 'SĐT',
        type: 'phoneNumber',
        value: transaction?.user?.phoneNumber,
      },
      {
        title: 'Tên vật chất',
        type: 'facilityFullname',
        value: transaction?.trainingEquipment?.name,
      },
      // {
      //   title: 'Lần mượn',
      //   type: 'requestTime',
      //   value: transactions?.length + 1 - index,
      // },
      {
        title: `Nơi ${
          transaction?.transactionType === 'BORROW' ? 'mượn' : 'trả'
        }`,
        type: 'requestAddress',
        value:
          transaction?.borrowSource?.name !== 'Tiểu đoàn 2'
            ? `Đại đội ${transaction?.borrowSource?.name}`
            : 'Tiểu đoàn 2',
      },
      {
        title: 'Số lượng',
        type: 'quantity',
        value: transaction?.quantity,
      },
      {
        title: 'Lý do',
        type: 'reason',
        value: transaction?.reason,
      },
      {
        title: 'Thời gian tạo yêu cầu',
        type: 'createdAt',
        value: dayjs(transaction?.createdAt).format('hh:mm:ss, DD/MM/YYYY'),
      },
      {
        title: 'Trạng thái',
        type: 'status',
        value: transaction?.status,
      },
      {
        title: 'Thời gian phê duyệt',
        type: 'approvalTime',
        value: transaction?.approvedAt
          ? dayjs(transaction?.approvedAt).format('hh:mm:ss, DD/MM/YYYY')
          : '--/--/----',
        isInvisible: transaction?.status !== STATUS_TYPE.APPROVED,
      },
      {
        title: 'Người phê duyệt',
        type: 'approver',
        value: '',
        isInvisible: transaction?.status !== STATUS_TYPE.APPROVED,
      },
      {
        title: 'Lý do từ chối',
        type: 'rejectReason',
        value: transaction?.rejectReason || '',
        isInvisible: transaction?.status !== STATUS_TYPE.DENIED,
      },
    ],
  };
};
