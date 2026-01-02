import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import {
    formatDate,
    formatVietnameseDay,
    getCurrentWeekDates,
} from '@/lib/utils';
import { colors } from '@/theme/colors';
import { ReactElement } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

type PropsDayHeader = {
  value: string;
  isCheck: boolean;
  onPress?: () => void;
};

export function DayHeader({
  value,
  isCheck,
  onPress,
}: PropsDayHeader): ReactElement {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Box
        flex={1}
        px={16}
        h={48}
        justifyContent="center"
        borderRadius={16}
        bgColor={isCheck ? colors.primary[40] : colors.white}
      >
        <Text color={isCheck ? colors.text[3] : colors.text[4]} align="center">
          {formatVietnameseDay(value)}
        </Text>
        <Text color={isCheck ? colors.text[3] : colors.text[4]} align="center">
          ({formatDate(value)})
        </Text>
      </Box>
    </TouchableOpacity>
  );
}

interface DayHeaderScrollViewProps {
  startOfWeek: string;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

export function DayHeaderScrollView({
  startOfWeek,
  selectedDate,
  setSelectedDate,
}: DayHeaderScrollViewProps) {
  const weekDates = getCurrentWeekDates(startOfWeek);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.dayContainer}
      showsHorizontalScrollIndicator={false}
    >
      {weekDates.map((value, index) => {
        return (
          <DayHeader
            key={index}
            value={value}
            isCheck={selectedDate === value}
            onPress={() => setSelectedDate(value)}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    gap: 16,
    height: 48,
  },
});
