import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { ReactElement, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

type PropsDayElement = {
  isCheck: boolean;
  onPress?: () => void;
  isDefault?: boolean;
};

export function DayElement({
  isCheck,
  onPress,
  isDefault,
}: PropsDayElement): ReactElement {
  return (
    <>
      {isCheck || isDefault ? (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <Box style={styles.background} bgColor={colors.primary[40]}>
            <Text fontSize={14} color={colors.black}>
              Thứ 2
            </Text>
            <Text fontSize={14}>(01/01/2025)</Text>
          </Box>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <Box style={styles.background}>
            <Text fontSize={14}>Thứ 2</Text>
            <Text fontSize={14}>(01/01/2025)</Text>
          </Box>
        </TouchableOpacity>
      )}
    </>
  );
}

export function DayElementScrollView() {
  const dayofweek: string[] = [
    'Thứ 2',
    'Thứ 3',
    'Thứ 4',
    'Thứ 5',
    'Thứ 6',
    'Thứ 7',
    'CN',
  ];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <ScrollView horizontal contentContainerStyle={styles.dayContainer}>
      {dayofweek.map((value, index) => {
        return (
          <DayElement
            key={index}
            isCheck={selectedIndex === index}
            onPress={() => setSelectedIndex(index)}
            isDefault={selectedIndex === index}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  dayContainer: {
    gap: 8,
    height: 48,
  },
});
