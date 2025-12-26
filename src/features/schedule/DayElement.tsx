import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import {
  formatDate,
  formatVietnameseDay,
  getCurrentWeekDates,
} from '@/lib/utils';
import { colors } from '@/theme/colors';
import { ReactElement, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

type PropsDayElement = {
  value: string;
  isCheck: boolean;
  onPress?: () => void;
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

export function DayElementScrollView() {
  const weekDates = getCurrentWeekDates();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.dayContainer}
      showsHorizontalScrollIndicator={false}
    >
      {weekDates.map((value, index) => {
        return (
          <DayElement
            key={index}
            value={value}
            isCheck={selectedIndex === index}
            onPress={() => setSelectedIndex(index)}
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
