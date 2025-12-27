import CloseSvg from '@/assets/icons/close-svg';
import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import TextField from '@/components/common/TextField/TextField';
import { colors } from '@/theme/colors';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MODAL_WIDTH = SCREEN_WIDTH * 0.9;

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const RejectRequestModal = ({ isVisible, onClose }: Props) => {
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
          placeholder="Nhập lý do từ chối (không bắt buộc)"
          multiline
          inputStyle={{ height: 136, fontSize: 16 }}
        />
        <Box h={16} />
        <Button text="Gửi" size="small" />
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
