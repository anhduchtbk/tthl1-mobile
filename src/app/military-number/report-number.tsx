import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { AbsentStudentGroup } from '@/features/military-number/AbsentStudentGroup';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { z } from 'zod';

const data = [
  { label: 'Điểm danh thể dục buổi sáng', value: '1' },
  { label: 'Điểm danh Ăn cơm sáng', value: '2' },
  { label: 'Điểm danh Học buổi sáng (Võ thuật CAND)', value: '3' },
];

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
  const insets = useSafeAreaInsets();

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
      <Box flex={1} mt={20} px={16} gap={16} pb={insets.bottom}>
        <Box flex={1}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flex: 1, gap: 16 }}
          >
            <Dropdown
              data={data}
              control={control}
              name="purpose"
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
              placeholderTextColor={colors.placeholder}
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
              placeholderTextColor={colors.placeholder}
              keyboardType="number-pad"
              labelColor={colors.text[2]}
              error={errors?.absentNumber?.message}
            />
            <AbsentStudentGroup />
            <Box
              h={24}
              px={10}
              borderWidth={1}
              borderColor={colors.blue}
              borderRadius={16}
              alignSelf='flex-end'
              justifyContent="center"
            >
              <Text fontSize={FontSize.SMALL} color={colors.blue}>
                Thêm nhóm HV vắng +
              </Text>
            </Box>
          </ScrollView>
        </Box>
        <Button text="Xác nhận" />
      </Box>
    </Box>
  );
};

export default ReportNumberScreen;
