import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import AcceptRequestModal from '@/features/home/notification/AcceptRequestModal';
import RejectRequestModal from '@/features/home/notification/RejectRequestModal';
import { RenderRequestItem } from '@/features/home/notification/RenderRequestItem';
import { colors } from '@/theme/colors';
import React, { useState } from 'react';

const fakeItem = {
  infos: [
    {
      title: 'Đơn vị yêu cầu',
      type: 'requestedUnit',
      value: 'C2 - VB2',
    },
    {
      title: 'Người yêu cầu',
      type: 'requester',
      value: 'Đại đội trưởng: Đại uý Nguyễn Văn A',
    },
    {
      title: 'SĐT',
      type: 'phoneNumber',
      value: '032 808 1300',
    },
    {
      title: 'Tên vật chất',
      type: 'facilityFullname',
      value: 'Súng tiểu liên AK-47',
    },
    {
      title: 'Lần mượn',
      type: 'requestTime',
      value: '01',
    },
    {
      title: 'Nơi mượn',
      type: 'requestAddress',
      value: 'Tiểu đoàn 2',
    },
    {
      title: 'Số lượng',
      type: 'quantity',
      value: 100,
    },
    {
      title: 'Lý do',
      type: 'reason',
      value: 'C2 VB2 đăng ký mượn vật chất tiểu đoàn phục vụ môn bắn súng',
    },
    {
      title: 'Thời gian tạo yêu cầu',
      type: 'createdAt',
      value: '19:00:00, 01/01/2025',
    },
    {
      title: 'Trạng thái',
      type: 'status',
      value: 0,
    },
  ],
};

export default function FacilityRequestScreen() {
  const [isOpenAcceptModal, setIsOpenAcceptModal] = useState(false);
  const [isOpenRejectModal, setIsOpenRejectModal] = useState(false);

  const onOpenAcceptModal = () => {
    setIsOpenAcceptModal(true);
  };

  const onOpenRejectModal = () => {
    setIsOpenRejectModal(true);
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader
        title="YÊU CẦU MƯỢN"
        subTitle="SÚNG TIỂU LIÊN AK-47"
        subTitleBold
      />
      <Box mt={20} px={16}>
        <RenderRequestItem
          rowItem={fakeItem}
          isConfirm
          onAcceptRequest={onOpenAcceptModal}
          onRejectRequest={onOpenRejectModal}
        />
      </Box>
      <RejectRequestModal
        isVisible={isOpenRejectModal}
        onClose={() => setIsOpenRejectModal(false)}
      />
      <AcceptRequestModal
        isVisible={isOpenAcceptModal}
        onClose={() => setIsOpenAcceptModal(false)}
      />
    </Box>
  );
}
