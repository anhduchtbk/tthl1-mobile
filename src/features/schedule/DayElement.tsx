import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import {
  formatDate,
  formatVietnameseDay,
  getCurrentWeekDates,
} from '@/lib/utils';
import { colors } from '@/theme/colors';
import { ReactElement } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

type PropsDayElement = {
  value: string;
  isCheck: boolean;
  onPress?: () => void;
};

type WeekSummaryProps = {
  isCheck: boolean;
  week: number;
  onPress?: () => void;
};

type PropsDayElementScroll = {
  week: number;
  fromDate: string;
  selectedDate: string;
  setSelectedDate: (value: string) => void;
};

export function DayElement({
  value,
  isCheck,
  onPress,
}: PropsDayElement): ReactElement {
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

function WeekSummary({ isCheck, week, onPress }: WeekSummaryProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Box
        px={16}
        h={48}
        justifyContent="center"
        borderRadius={16}
        bgColor={isCheck ? colors.primary[40] : colors.white}
      >
        <Text align="center" color={isCheck ? colors.text[3] : colors.text[4]}>
          Tổng hợp
        </Text>
        <Text align="center" color={isCheck ? colors.text[3] : colors.text[4]}>
          tuần {week || ''}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}

export function DayElementScrollView({
  week,
  fromDate,
  selectedDate,
  setSelectedDate,
}: PropsDayElementScroll) {
  const weekDates = getCurrentWeekDates(fromDate);

  const handleSelect = (index: string) => {
    setSelectedDate(index);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Tổng hợp */}
      <WeekSummary
        week={week}
        isCheck={selectedDate === 'all'}
        onPress={() => handleSelect('all')}
      />

      {weekDates.map((date, index) => (
        <DayElement
          key={index}
          value={date}
          isCheck={selectedDate === date}
          onPress={() => handleSelect(date)}
        />
      ))}
    </ScrollView>
  );
}
