import CloseSvg from '@/assets/icons/close-svg';
import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MODAL_WIDTH = SCREEN_WIDTH * 0.9;

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const AcceptRequestModal = ({ isVisible, onClose }: Props) => {
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
            yêu cầu mượn 100 khẩu Súng tiểu liên AK-47 từ Tiểu đoàn 2 cho C2 -
            VB2?
          </Text>
        </Text>
        <Box h={16} />
        <Box flexDirection="row" alignItems="center" gap={8} mt={9}>
          <Box flex={1}>
            <Button
              variant="outlined"
              text="Huỷ"
              size="small"
              onPress={() => onClose()}
            />
          </Box>
          <Box flex={1}>
            <Button text="Xác nhận" size="small" onPress={() => onClose()} />
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
