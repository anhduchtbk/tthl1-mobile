import CloseSvg from '@/assets/icons/close-svg';
import Button from '@/components/common/Button';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import Input from '@/components/common/TextField/Input';
import TextField from '@/components/common/TextField/TextField';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { z } from 'zod';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const MODAL_WIDTH = SCREEN_WIDTH * 0.9;

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const data = [
  { label: 'Điểm danh thể dục buổi sáng', value: '1' },
  { label: 'Điểm danh Ăn cơm sáng', value: '2' },
  { label: 'Điểm danh Học buổi sáng (Võ thuật CAND)', value: '3' },
];

type FormData = {
  companyName: string;
  facilityAmount: number;
  reason: string;
};

const reportNumberSchema = z.object({
  companyName: z.string(),
  facilityAmount: z.number(),
  reason: z.string(),
});

const LendFacilityModal = ({ isVisible, onClose }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(reportNumberSchema),
    defaultValues: {
      companyName: '',
      facilityAmount: 0,
      reason: '',
    },
  });

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
            Mượn vật chất
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
            label={'Nơi mượn vật chất'}
            placeholder={'Nơi mượn vật chất'}
            searchPlaceholder={'Tìm kiếm'}
            dropdownStyle={{ borderColor: '#F1CFE3' }}
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
                  Tất cả (100)
                </Text>
              </Box>
            }
          />

          <Input
            as={TextField}
            name="reason"
            control={control}
            label={'Lý do'}
            placeholder={'Nhập lý do'}
            keyboardType="number-pad"
            innerInputWrapper={{
              backgroundColor: colors.white,
              borderColor: '#F1CFE3',
            }}
          />
        </Box>
        <Button text="GỬI YÊU CẦU" rounded />
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

export default LendFacilityModal;
