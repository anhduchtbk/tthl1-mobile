import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import Modal from 'react-native-modal';
import { Box } from '../Layout/Box';
import { Text } from '../Text/Text';

interface DateTimePickerModalProps {
  isVisible: boolean;
  value: Date;
  dateMode?: 'date' | 'time';
  onChange: (value: Date) => void;
  closeModal: () => void;
}

export function DateTimePickerModal({
  isVisible,
  value,
  dateMode = 'date',
  onChange,
  closeModal,
}: DateTimePickerModalProps) {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  const [selectDate, setSelectedDate] = useState(new Date(value));

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set' && selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  const chooseDate = () => {
    onChange(selectDate);
    closeModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      backdropColor="rgba(0, 0, 0, 0.5)"
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <Box
        w={width * 0.8}
        bgColor={colors.white}
        p={20}
        borderRadius={10}
        alignItems="center"
        alignSelf="center"
      >
        <DateTimePicker
          value={value}
          mode={dateMode}
          display="spinner"
          onChange={handleChange}
          locale='vi'
        />
        <Box onPress={chooseDate}>
          <Text fontSize={17} fontWeight="semibold">
            Chọn
          </Text>
        </Box>
      </Box>
    </Modal>
  );
}

export default DateTimePickerModal;
