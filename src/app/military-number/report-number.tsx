import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { REPORT_NUMBER_OPTIONS } from '@/constants/option';
import { AbsentStudentGroup } from '@/features/military-number/AbsentStudentGroup';
import { colors } from '@/theme/colors';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from 'react-native';
import { z } from 'zod';

type FormData = {
  purpose: string;
  companyNumber: number;
  absentNumber: number;
};

const reportNumberSchema = z.object({
  purpose: z.string(),
  companyNumber: z.number(),
  absentNumber: z.number(),
});

const ReportNumberScreen = () => {
  const refs = {
    purpose: useRef<TextInput>(null),
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
      purpose: '',
      companyNumber: 0,
      absentNumber: 0,
    },
  });

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="BÁO CÁO QUÂN SỐ" subTitle="ĐẠI ĐỘI 2 - VB2" />
      <Box mt={20} px={16} gap={16}>
        <Dropdown
          data={REPORT_NUMBER_OPTIONS}
          control={control}
          name="purpose"
          label={'Mốc điểm danh'}
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
          placeholderTextColor={colors.placeholder}
          returnKeyType="next"
          keyboardType="number-pad"
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
          placeholderTextColor={colors.placeholder}
          keyboardType="number-pad"
          error={errors?.absentNumber?.message}
        />
        <AbsentStudentGroup />
        <Button text="Xác nhận" />
      </Box>
    </Box>
  );
};

export default ReportNumberScreen;
