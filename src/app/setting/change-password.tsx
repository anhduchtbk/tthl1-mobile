import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { useChangePassword } from '@/hooks/useAuth';
import { colors } from '@/theme/colors';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, TextInput } from 'react-native';
import z from 'zod';

type ChangePasswordFormData = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Vui lòng nhập mật khẩu hiện tại'),
    newPassword: z.string().min(1, 'Vui lòng nhập mật khẩu mới'),
    confirmNewPassword: z.string().min(1, 'Vui lòng nhập lại mật khẩu mới'),
  })
  .refine(data => data.newPassword === data.confirmNewPassword, {
    message: 'Nhập lại mật khẩu mới chưa chính xác, vui lòng nhập lại',
    path: ['confirmNewPassword'],
  });

export default function ChangePasswordScreen() {
  const router = useRouter();
  const refs = {
    currentPassword: useRef<TextInput>(null),
    newPassword: useRef<TextInput>(null),
    confirmNewPassword: useRef<TextInput>(null),
  };

  const {
    mutateAsync: changePasswordRequest,
    isPending: isChangePasswordPending,
  } = useChangePassword();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const onConfirm = (data: ChangePasswordFormData) => {
    const params = {
      currentPassword: data?.currentPassword,
      newPassword: data?.newPassword,
    };

    changePasswordRequest(params, {
      onSuccess: data => {
        if (data) {
          Alert.alert('Thông báo', 'Thay đổi mật khẩu thành công', [
            {
              text: 'Ok',
              onPress: () => {
                router.back();
              },
            },
          ]);
        }
      },
      onError: (error: any) => {
        Alert.alert('Lỗi!!!', JSON.stringify(error?.data?.message?.message));
      },
    });
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="ĐỔI MẬT KHẨU" />
      <Box mt={16} px={16} gap={16}>
        <Input
          as={TextField}
          autoFocus
          isRequired
          ref={refs.currentPassword}
          name="currentPassword"
          label="Nhập mật khẩu hiện tại"
          placeholder="Nhập mật khẩu hiện tại"
          control={control}
          returnKeyType="next"
          onSubmitEditing={() => refs.newPassword.current?.focus()}
          error={errors?.currentPassword?.message}
        />
        <Input
          as={TextField}
          isRequired
          ref={refs.newPassword}
          name="newPassword"
          label="Nhập mật khẩu mới"
          placeholder="Nhập mật khẩu mới"
          control={control}
          returnKeyType="next"
          onSubmitEditing={() => refs.confirmNewPassword.current?.focus()}
          error={errors?.newPassword?.message}
        />
        <Input
          as={TextField}
          isRequired
          ref={refs.confirmNewPassword}
          name="confirmNewPassword"
          label="Nhập lại mật khẩu mới"
          placeholder="Nhập lại mật khẩu mới"
          control={control}
          error={errors?.confirmNewPassword?.message}
        />
        <Button
          text="XÁC NHẬN"
          onPress={handleSubmit(onConfirm)}
          loading={isChangePasswordPending}
        />
      </Box>
    </Box>
  );
}
