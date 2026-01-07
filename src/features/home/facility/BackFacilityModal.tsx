import { Inventory } from '@/api/types/inventory';
import {
  CreateTransactionRequest,
  GetTransactionEquipmentResponse,
} from '@/api/types/transaction';
import CloseSvg from '@/assets/icons/close-svg';
import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import {
  useCreateTransaction,
  useGetTransactionAvailableCompanies,
} from '@/hooks/useTransaction';
import { formatRank } from '@/lib/utils';
import { useAuthStore } from '@/store/authStore';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { z } from 'zod';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MODAL_WIDTH = SCREEN_WIDTH * 0.9;

interface Props {
  isVisible: boolean;
  inventoryList: Inventory[];
  facilityDetail: GetTransactionEquipmentResponse;
  onClose: () => void;
}

type FormData = {
  companyName: string;
  facilityAmount: number;
  reason: string;
  requester: string;
};

const BackFacilityModal = ({
  isVisible,
  facilityDetail,
  inventoryList,
  onClose,
}: Props) => {
  const { user } = useAuthStore();

  const { data: companyList } = useGetTransactionAvailableCompanies(
    facilityDetail?.equipment?.id
  );

  const { mutateAsync: createTransaction, isPending: isCreatePending } =
    useCreateTransaction();

  const totalLeftQuantity =
    facilityDetail?.totalInventoryQuantity -
    facilityDetail?.totalBorrowedQuantity;

  const [availableQuantity, setAvailableQuantity] = useState(totalLeftQuantity);

  const reportNumberSchema = z.object({
    companyName: z.string().min(1, 'Vui lòng chọn nơi trả vật chất'),
    facilityAmount: z
      .number('Số lượng không hợp lệ')
      .min(1, 'Vui lòng nhập số lượng')
      .gt(0, 'Số lượng phải lớn hơn 0')
      .lt(availableQuantity, `Số lượng phải nhỏ hơn ${availableQuantity}`),
    reason: z.string().min(1, 'Vui lòng nhập lý do'),
    requester: z.string(),
  });

  const {
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(reportNumberSchema),
    mode: 'onChange',
    defaultValues: {
      companyName: '',
      facilityAmount: 0,
      reason: '',
      requester: `${formatRank(user?.rank)} ${user?.fullName}`,
    },
  });

  const data = React.useMemo(() => {
    if (!companyList) return [];

    return [
      { label: 'Tiểu đoàn 2', value: '0' }, // default option
      ...companyList.map(item => ({
        label: `Đại đội ${item.companyName}`,
        value: String(item.companyId),
      })),
    ];
  }, [companyList]);

  useEffect(() => {
    const defaultCompany = data.find(item => item.value === '0');
    if (defaultCompany) {
      setValue('companyName', defaultCompany.value);
    }
  }, [data, setValue]);

  const onChangeCompany = useCallback(
    (value: string) => {
      setValue('companyName', value);

      if (value === '0') {
        setAvailableQuantity(totalLeftQuantity);
      } else {
        const quantity = companyList?.find(
          item => item.companyId === Number(watch('companyName'))
        )?.availableQuantity;
        setAvailableQuantity(quantity || 0);
      }
    },
    [watch('companyName')]
  );

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    // TODO: gọi API gửi yêu cầu

    const params = {
      trainingEquipmentId: facilityDetail?.equipment?.id,
      type: 'RETURN',
      quantity: data.facilityAmount,
      reason: data.reason,
    } as CreateTransactionRequest;

    createTransaction(params, {
      onSuccess: res => {
        console.log('createAttendanceReportRequest', res);

        Alert.alert('Thông báo', 'Tạo yêu cầu trả thành công', [
          {
            text: 'Ok',
            onPress: () => {
              onClose();
            },
          },
        ]);
      },
      onError: (error: any) => {
        Alert.alert('Lỗi!!!', JSON.stringify(error?.data?.message?.message));
      },
    });
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropOpacity={0.5}
      // onBackdropPress={onClose}
      onBackButtonPress={onClose}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <Box
        w={MODAL_WIDTH}
        bgColor={colors.white}
        borderWidth={1}
        borderColor={colors.neutral['dark']}
        borderRadius={12}
        p={16}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          py={10}
        >
          <Box w={20} />
          <Text fontSize={20} fontWeight="bold" color={'#3C4257'}>
            Trả vật chất
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => onClose()}>
            <CloseSvg />
          </TouchableOpacity>
        </Box>
        <Box gap={8} mb={16}>
          <Dropdown
            data={data}
            control={control}
            name="companyName"
            label={'Nơi trả vật chất'}
            placeholder={'Nơi trả vật chất'}
            searchPlaceholder={'Tìm kiếm'}
            dropdownStyle={{ borderColor: '#F1CFE3' }}
            error={errors?.companyName?.message}
            onChange={onChangeCompany}
          />
          <Input
            as={TextField}
            name="facilityAmount"
            control={control}
            label={'Số lượng'}
            placeholder={'Nhập số lượng'}
            keyboardType="number-pad"
            innerInputWrapper={{
              backgroundColor: colors.white,
              borderColor: '#F1CFE3',
            }}
            right={
              <Box
                borderWidth={1}
                borderColor={colors.blue}
                borderRadius={16}
                px={10}
                py={5}
              >
                <Text fontSize={FontSize.SMALL} color={colors.blue}>
                  Tất cả ({availableQuantity || 0})
                </Text>
              </Box>
            }
            error={errors?.facilityAmount?.message}
            onChangeText={value => {
              const cleanValue = value.replace(/[^0-9]/g, '');
              setValue('facilityAmount', Number(cleanValue));
            }}
          />
          <Input
            as={TextField}
            name="reason"
            control={control}
            label={'Lý do'}
            placeholder={'Nhập lý do'}
            innerInputWrapper={{
              backgroundColor: colors.white,
              borderColor: '#F1CFE3',
            }}
            error={errors?.reason?.message}
          />
          <Input
            as={TextField}
            name="requester"
            control={control}
            label={'Người yêu cầu'}
            value={`${formatRank(user?.rank)} ${user?.fullName}`}
            innerInputWrapper={{
              backgroundColor: colors.white,
              borderColor: '#F1CFE3',
            }}
            error={errors?.requester?.message}
            editable={false}
          />
        </Box>
        <Button
          text="GỬI YÊU CẦU"
          loading={isCreatePending}
          onPress={handleSubmit(onSubmit)}
        />
      </Box>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
});

export default BackFacilityModal;
