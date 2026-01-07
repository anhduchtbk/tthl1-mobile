import { TransactionPending } from '@/api/types/transaction';
import CloseSvg from '@/assets/icons/close-svg';
import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import TextField from '@/components/common/TextField/TextField';
import { STATUS_TYPE } from '@/constants/value';
import { useUpdateTransactionStatus } from '@/hooks/useTransaction';
import { colors } from '@/theme/colors';
import React, { useState } from 'react';
import { Alert, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MODAL_WIDTH = SCREEN_WIDTH * 0.9;

interface Props {
  transactionItem: TransactionPending;
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (transaction: TransactionPending) => void;
}

const RejectRequestModal = ({
  transactionItem,
  isVisible,
  onClose,
  onConfirm,
}: Props) => {
  const [rejectReason, setRejectReason] = useState('');

  const { mutateAsync: updateStatusRequest, isPending: isUpdateStatusPending } =
    useUpdateTransactionStatus(transactionItem?.id);

  const onSubmit = async () => {
    const params = { status: STATUS_TYPE.DENIED, rejectReason };
    await updateStatusRequest(params, {
      onSuccess: () => {
        Alert.alert('Thông báo', 'Từ chối yêu cầu thành công', [
          {
            text: 'Ok',
            onPress: () => {
              onConfirm({
                ...transactionItem,
                ...params,
                approvedAt: Date.now().toString(),
              });
              onClose();
            },
          },
        ]);
      },
      onError: (error: any) => {
        Alert.alert('Lỗi!!!', JSON.stringify(error?.data?.message?.message));
      },
    });
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.5}
      // onBackdropPress={onClose}
      onBackButtonPress={onClose}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <Box
        w={MODAL_WIDTH}
        bgColor={colors.white}
        borderWidth={1}
        borderColor={colors.neutral['dark']}
        borderRadius={12}
        p={16}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          my={8}
        >
          <Box w={20} />
          <Text fontSize={20} fontWeight="medium" color={'#3C4257'}>
            Từ chối yêu cầu
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => onClose()}>
            <CloseSvg />
          </TouchableOpacity>
        </Box>
        <TextField
          label="Lý do"
          autoFocus
          placeholder="Nhập lý do từ chối (không bắt buộc)"
          multiline
          inputStyle={{ height: 136, fontSize: 16 }}
          onChange={setRejectReason}
        />
        <Box h={16} />
        <Button
          text="Gửi"
          size="small"
          onPress={onSubmit}
          loading={isUpdateStatusPending}
        />
      </Box>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
});

export default RejectRequestModal;
