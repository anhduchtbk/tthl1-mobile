import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { colors } from '@/theme/colors';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import { z } from 'zod';

const data = [
  { label: 'Điểm danh thể dục buổi sáng', value: '1' },
  { label: 'Điểm danh Ăn cơm sáng', value: '2' },
  { label: 'Điểm danh Học buổi sáng (Võ thuật CAND)', value: '3' },
];

type FormData = {
  reason: string;
  companyNumber: number;
  absentNumber: number;
};

const reportNumberSchema = z.object({
  reason: z.string(),
  companyNumber: z.number(),
  absentNumber: z.number(),
});

const ReportNumberScreen = () => {
  const refs = {
    reason: useRef<TextInput>(null),
    companyNumber: useRef<TextInput>(null),
    absentNumber: useRef<TextInput>(null),
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(reportNumberSchema),
    defaultValues: {
      reason: '',
      companyNumber: 0,
      absentNumber: 0,
    },
  });

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="BÁO CÁO QUÂN SỐ" subTitle="ĐẠI ĐỘI 2 - VB2" />
      <Box mt={20} px={16} gap={16}>
        <Dropdown
          data={data}
          control={control}
          name="reason"
          label={'Quân số'}
          isRequired
          placeholder={'Điểm danh'}
          searchPlaceholder={'Tìm kiếm'}
        />
        <Input
          as={TextField}
          isRequired
          name="companyNumber"
          control={control}
          label={'Tổng quân số'}
          placeholder={'0'}
          returnKeyType="next"
          keyboardType="number-pad"
          labelColor={colors.text[2]}
          onSubmitEditing={() => refs.absentNumber.current?.focus()}
          error={errors?.companyNumber?.message}
        />
        <Input
          as={TextField}
          name="absentNumber"
          ref={refs.absentNumber}
          control={control}
          label={'Tổng vắng'}
          placeholder={'0'}
          keyboardType="number-pad"
          labelColor={colors.text[2]}
          error={errors?.absentNumber?.message}
        />
        <Button text="Xác nhận" rounded />
      </Box>
    </Box>
  );
};

export default ReportNumberScreen;
