import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { Modal } from 'react-native';

type Props = {
  isOpen: boolean;
  onClose?: () => void;
};

export function ForgotPasswordModal({ isOpen, onClose }: Props) {
  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      onRequestClose={onClose}
      transparent={true}
    >
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        px={24}
        bgColor="rgba(0,0,0,0.4)"
      >
        <Box bgColor={colors.white} p={16} gap={16} borderRadius={12}>
          <Box>
            <Box alignItems="center" p={12}>
              <Text fontSize={20} fontWeight="bold">
                {' '}
                Quên mật khẩu
              </Text>
            </Box>
            <Text fontSize={16}>
              Để thực hiện lấy lại mật khẩu, vui lòng liên hệ với{' '}
              {
                <Text color={colors.text[2]} fontSize={16} fontWeight="bold">
                  Trung uý Nguyễn Văn Nam
                </Text>
              }{' '}
              (
              {
                <Text underline fontSize={16} color={colors.primary[20]}>
                  032 808 1300
                </Text>
              }
              ) - Cán bộ phòng Kế hoạch tổng hợp hoặc Hotline TTHL1 (
              <Text underline fontSize={16} color={colors.primary[20]}>
                0203 123 023
              </Text>
              ) để được hỗ trợ.
            </Text>
          </Box>
          <Box
            px={24}
            py={12}
            alignItems="center"
            bgColor={colors.primary[20]}
            borderRadius={16}
            onPress={onClose}
          >
            <Text color={colors.white}>Đồng ý</Text>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
