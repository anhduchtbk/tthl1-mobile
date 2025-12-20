import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export default function ChangePasswordScreen() {
  return (
    <Box px={16}>
      <ScreenHeader title="ĐỔI MẬT KHẨU" />
      <Box gap={16}>
        <Input
          as={TextField}
          label="Nhập mật khẩu hiện tại *"
          containerStyle={styles.input}
        />
        <Input
          as={TextField}
          label="Nhập mật khẩu mới *"
          containerStyle={styles.input}
        />
        <Input
          as={TextField}
          label="Nhập lại mật khẩu mới *"
          containerStyle={styles.input}
        />
        <Box
          bgColor={colors.primary[20]}
          px={16}
          py={12}
          alignItems="center"
          borderRadius={50}
        >
          <Text color={colors.white}>XÁC NHẬN</Text>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.primary[20],
    borderRadius: 10,
  },
});
