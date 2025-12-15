import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ButtonLogin } from '@/features/login/ButtonLogin';
import { FormInputLabel } from '@/features/login/FormInputLabel';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  return (
    <LinearGradient colors={['#D4CAFC', '#FCD1DA']} style={styles.background}>
      <SafeAreaView style={styles.titleContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Box mt={16} gap={16}>
          <Text fontSize={24} fontWeight="bold" color={colors.primary[60]}>
            Chào mừng,
          </Text>
          <Text fontSize={FontSize.LARGE} color={colors.text['darkest']}>
            Đăng nhập để bắt đầu với TTHL1 - K02 👋
          </Text>
        </Box>

        <Box mt={36}>
          <FormInputLabel label="Tên đăng nhập" autoFocus />
          <Box h={12} />
          <FormInputLabel label="Mật khẩu" />
          <TouchableOpacity activeOpacity={0.7} style={styles.forgotPass}>
            <Text fontSize={FontSize.LARGE} color={colors.primary[60]}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
          <ButtonLogin />
        </Box>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  logo: {
    width: 61,
    height: 68,
  },
  header1: {
    fontWeight: 700,
    fontSize: 24,
    color: '#5C0191',
  },
  header2: {
    fontWeight: 400,
    fontSize: 16,
  },
  forgotPass: {
    paddingVertical: 12,
    marginBottom: 24,
    alignItems: 'center',
  },
  formLogin: {
    gap: 12,
  },
});
