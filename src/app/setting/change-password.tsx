import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { colors } from '@/theme/colors';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
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
  const refs = {
    currentPassword: useRef<TextInput>(null),
    newPassword: useRef<TextInput>(null),
    confirmNewPassword: useRef<TextInput>(null),
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  return (
    <Box bgColor={colors.white}>
      <ScreenHeader title="ĐỔI MẬT KHẨU" />
      <Box mt={16} px={16} gap={16}>
        <Input
          as={TextField}
          name="currentPassword"
          label="Nhập mật khẩu hiện tại *"
          control={control}
          returnKeyType="next"
          error={errors?.currentPassword?.message}
        />
        <Input
          as={TextField}
          name="newPassword"
          label="Nhập mật khẩu mới *"
          control={control}
          returnKeyType="next"
          error={errors?.newPassword?.message}
        />
        <Input
          as={TextField}
          label="Nhập lại mật khẩu mới *"
          name="confirmNewPassword"
          control={control}
          returnKeyType="next"
          error={errors?.confirmNewPassword?.message}
        />
        <Button text="XÁC NHẬN" rounded />
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
