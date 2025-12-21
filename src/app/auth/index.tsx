import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { ButtonLogin } from '@/features/login/ButtonLogin';
import { ForgotPasswordModal } from '@/features/login/ForgotPasswordModal';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

type FormData = {
  username: string;
  password: string;
};

const changePasswordSchema = z.object({
  username: z.string().min(1, 'Vui lòng nhập tên đăng nhập'),
  password: z.string().min(1, 'Vui lòng nhập mật khẩu'),
});

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const [openModal, setOpenModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });
  return (
    <LinearGradient
      colors={['#E4DFBDB2', '#E4DFBDB2']}
      style={styles.background}
    >
      <Image
        source={require('@/assets/images/background-splash-image.png')}
        style={styles.logoAbsolute}
        resizeMode="contain"
        width={screenWidth}
        height={screenHeight}
      />
      <Box style={styles.titleContainer} pt={insets.top} pb={insets.bottom}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Box mt={16} gap={16}>
          <Text fontSize={24} fontWeight="bold" color={colors.primary[20]}>
            Chào mừng,
          </Text>
          <Text fontSize={FontSize.LARGE} color={colors.text['darkest']}>
            Đăng nhập để bắt đầu với TTHL1 - K02 👋
          </Text>
        </Box>

        <Box mt={36}>
          {/* <FormInputLabel label="Tên đăng nhập" autoFocus />
          <FormInputLabel label="Mật khẩu" isPassword /> */}
          <Input
            placeholder="Nhập tên đăng nhập của bạn"
            as={TextField}
            name="username"
            control={control}
          />
          <Input
            placeholder="Nhập mật khẩu của bạn"
            as={TextField}
            name="password"
            isPassword
            control={control}
          />
          <Box h={12} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.forgotPass}
            onPress={() => setOpenModal(true)}
          >
            <Text fontSize={FontSize.LARGE} color={colors.primary[20]}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
          <ButtonLogin />
        </Box>
        <ForgotPasswordModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </Box>
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
  logoAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
