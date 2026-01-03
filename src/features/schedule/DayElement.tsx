import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import {
  formatDate,
  formatVietnameseDay,
  getCurrentWeekDates,
} from '@/lib/utils';
import { colors } from '@/theme/colors';
import { ReactElement, useState } from 'react';
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
  onChange?: (index: number) => void;
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
          tuần {week}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}

export function DayElementScrollView({ onChange }: PropsDayElementScroll) {
  const weekDates = getCurrentWeekDates();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onChange?.(index);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Tổng hợp */}
      <WeekSummary
        week={13}
        isCheck={selectedIndex === 0}
        onPress={() => handleSelect(0)}
      />

      {weekDates.map((date, index) => (
        <DayElement
          key={date}
          value={date}
          isCheck={selectedIndex === index + 1}
          onPress={() => handleSelect(index + 1)}
        />
      ))}
    </ScrollView>
  );
}
