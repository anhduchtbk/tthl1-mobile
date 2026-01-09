import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { ForgotPasswordModal } from '@/features/login/ForgotPasswordModal';
import { useLogin } from '@/hooks/useAuth';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { mutateAsync: loginRequest, isPending: isLoginPending } = useLogin();
  const [openModal, setOpenModal] = useState(false);

  const { width, height } = useWindowDimensions();

  const refs = {
    username: useRef<TextInput>(null),
    password: useRef<TextInput>(null),
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onLogin = async (data: FormData) => {
    await loginRequest(data, {
      onSuccess: data => {
        if (data.status === 200) {
          router.replace('/(tabs)');
          return;
        }
      },
      onError: (error: any) => {
        if (
          error?.data?.message?.message === 'username or password is incorrect'
        ) {
          Alert.alert('Lỗi!!!', `Tên đăng nhập hoặc mật khẩu không chính xác.`);
        } else {
          Alert.alert('Lỗi!!!', JSON.stringify(error?.data?.message?.message));
        }
      },
    });
  };

  return (
    <LinearGradient
      colors={['#E4DFBDB2', '#E4DFBDB2']}
      style={styles.background}
    >
      <Image
        source={require('@/assets/images/background-splash-image.png')}
        style={styles.logoAbsolute}
        resizeMode="contain"
        width={width}
        height={height}
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
          <Text
            fontSize={FontSize.LARGE}
            fontWeight="medium"
            color={colors.text['darkest']}
          >
            Đăng nhập để bắt đầu với TTHL1 - K02 👋
          </Text>
        </Box>

        <Box mt={36}>
          <Input
            as={TextField}
            autoFocus
            autoCapitalize="none"
            name="username"
            control={control}
            label="Tên đăng nhập"
            placeholder="Nhập tên đăng nhập của bạn"
            keyboardType="email-address"
            ref={refs.username}
            returnKeyType="next"
            onSubmitEditing={() => refs.password.current?.focus()}
            error={errors?.username?.message}
          />
          <Box h={12} />
          <Input
            as={TextField}
            name="password"
            isPassword
            control={control}
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            ref={refs.password}
            error={errors?.password?.message}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.forgotPass}
            onPress={() => setOpenModal(true)}
          >
            <Text fontSize={FontSize.LARGE} color={colors.primary[20]}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
          <Button
            text="Đăng nhập"
            size="medium"
            loading={isLoginPending}
            onPress={handleSubmit(onLogin)}
          />
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
