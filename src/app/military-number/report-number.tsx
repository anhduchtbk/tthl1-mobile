import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { REPORT_NUMBER_OPTIONS } from '@/constants/option';
import {
  AbsentGroup,
  AbsentStudentGroup,
} from '@/features/military-number/AbsentStudentGroup';
import { useCreateAttendanceReport } from '@/hooks/useAttendanceReport';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'expo-router/build/hooks';
import { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, TextInput } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { z } from 'zod';

type FormData = {
  purpose: string;
  companyNumber: number;
  absentNumber?: number;
};

const reportNumberSchema = z.object({
  purpose: z.string(),
  companyNumber: z.number(),
  absentNumber: z.number().optional(),
});

const ReportNumberScreen = () => {
  const insets = useSafeAreaInsets();
  const searchParams = useSearchParams();
  const companyItem = JSON.parse(searchParams.get('companyItem') || '');

  const [absentGroup, setAbsentGroup] = useState<AbsentGroup[]>([
    {
      id: 1,
      reason: '',
      students: [],
      otherReason: '',
    },
  ]);

  const {
    mutateAsync: createAttendanceReportRequest,
    isPending: isCreatePending,
  } = useCreateAttendanceReport();

  const refs = {
    purpose: useRef<TextInput>(null),
    companyNumber: useRef<TextInput>(null),
    absentNumber: useRef<TextInput>(null),
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(reportNumberSchema),
    mode: 'onChange',
    defaultValues: {
      purpose: '',
      companyNumber: Number(companyItem?.personnelCount),
    },
  });

  const addAbsentGroup = () => {
    const newGroup: AbsentGroup = {
      id: absentGroup[absentGroup.length - 1].id + 1,
      reason: '',
      students: [],
      otherReason: '',
    };
    setAbsentGroup([...absentGroup, newGroup]);
  };

  const editAbsentGroup = useCallback(
    (groupItem: AbsentGroup, newGroupItem: AbsentGroup) => {
      setAbsentGroup(
        absentGroup.map(group =>
          group.id === groupItem.id ? newGroupItem : group
        )
      );
    },
    [absentGroup]
  );

  const removeAbsentGroup = (groupItem: AbsentGroup) => {
    setAbsentGroup(absentGroup.filter(group => group.id !== groupItem.id));
  };

  const onSubmit = (data: FormData) => {
    const params = {
      personnelCount: data.companyNumber,
      totalAbsent: data.absentNumber,
      companyId: companyItem?.id,
      session: data.purpose,
      absentGroups: [],
    };

    createAttendanceReportRequest(params, {
      onSuccess: res => {
        console.log('createAttendanceReportRequest', res);
      },
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.white }}
      edges={['top']}
    >
      <ScreenHeader
        title="BÁO CÁO QUÂN SỐ"
        subTitle={`ĐẠI ĐỘI ${companyItem.name} - `}
        marginTop={4}
        hasBorderBottom={false}
      />
      <Box flex={1} mt={20} gap={16} pb={insets.bottom}>
        <Box flex={1}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 16 }}
          >
            <Box px={16} gap={16}>
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
                error={errors?.companyNumber?.message}
                onSubmitEditing={() => refs.absentNumber.current?.focus()}
                onChangeText={value => {
                  const cleanValue = value.replace(/[^0-9]/g, '');
                  setValue('companyNumber', Number(cleanValue));
                }}
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
                onChangeText={value => {
                  const cleanValue = value.replace(/[^0-9]/g, '');
                  setValue('absentNumber', Number(cleanValue));
                }}
              />
            </Box>
            {absentGroup.map((item, index) => {
              return (
                <AbsentStudentGroup
                  key={index}
                  index={index}
                  item={item}
                  onEditGroup={editAbsentGroup}
                  onRemoveGroup={removeAbsentGroup}
                  handleChangeReasonTxt={text => {
                    editAbsentGroup(item, { ...item, otherReason: text });
                  }}
                />
              );
            })}
            <Box
              h={24}
              px={10}
              mx={16}
              borderWidth={1}
              borderColor={colors.blue}
              borderRadius={16}
              alignSelf="flex-end"
              justifyContent="center"
              onPress={() => addAbsentGroup()}
            >
              <Text fontSize={FontSize.SMALL} color={colors.blue}>
                Thêm nhóm HV vắng +
              </Text>
            </Box>
            <Box h={100} />
          </ScrollView>
        </Box>
        <Box px={16}>
          <Button
            text="Xác nhận"
            onPress={handleSubmit(onSubmit)}
            loading={isCreatePending}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default ReportNumberScreen;
