import { TransactionPending } from '@/api/types/transaction';
import CloseSvg from '@/assets/icons/close-svg';
import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { STATUS_TYPE } from '@/constants/value';
import { useUpdateTransactionStatus } from '@/hooks/useTransaction';
import { formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import React from 'react';
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

const AcceptRequestModal = ({
  transactionItem,
  isVisible,
  onClose,
  onConfirm,
}: Props) => {
  const { mutateAsync: updateStatusRequest, isPending: isUpdateStatusPending } =
    useUpdateTransactionStatus(transactionItem?.id);

  const onSubmit = async () => {
    const params = { status: STATUS_TYPE.APPROVED };
    await updateStatusRequest(params, {
      onSuccess: () => {
        Alert.alert('Thông báo', 'Xác nhận yêu cầu thành công', [
          {
            text: 'Ok',
            onPress: () => {
              onConfirm({
                ...transactionItem,
                ...params,
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
            Xác nhận yêu cầu
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => onClose()}>
            <CloseSvg />
          </TouchableOpacity>
        </Box>
        <Text fontSize={FontSize.LARGE} color={colors.text[2]}>
          Bạn có chắc chắn đồng ý{' '}
          <Text fontWeight="bold" color={colors.blue}>
            yêu cầu{' '}
            {transactionItem?.transactionType === 'BORROW' ? 'mượn' : 'trả'}{' '}
            {transactionItem?.quantity}{' '}
            {transactionItem?.trainingEquipment?.name} từ{' '}
            {transactionItem?.borrowSource?.name || 'Tiểu đoàn 2'} cho C
            {transactionItem?.user?.company?.name} -{' '}
            {formatEducation(transactionItem?.user?.company?.course?.type)}?
          </Text>
        </Text>
        <Box h={16} />
        <Box flexDirection="row" alignItems="center" gap={8} mt={9}>
          <Box flex={1}>
            <Button
              variant="outlined"
              text="Huỷ"
              size="small"
              onPress={onClose}
            />
          </Box>
          <Box flex={1}>
            <Button
              text="Xác nhận"
              size="small"
              onPress={onSubmit}
              loading={isUpdateStatusPending}
            />
          </Box>
        </Box>
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

export default AcceptRequestModal;
