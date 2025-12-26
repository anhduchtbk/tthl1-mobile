import StarSvg from '@/assets/icons/star-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

type ItemProps = {
  name: string;
  personnelCount: number;
};

type RenderItemProps = {
  item: ItemProps;
};

export function RenderMilitaryItem({ item }: RenderItemProps) {
  const router = useRouter();

  const onOpenReportHistory = () => {
    router.push('/military-number/military-history-report');
  };

  const onReportNumber = () => {
    router.push('/military-number/report-number');
  };

  return (
    <Box style={styles.card}>
      <Box flex={1}>
        <Text color={colors.text[3]} fontWeight="bold">
          Đại đội {item?.name}
        </Text>
        <Box flexDirection="row" alignItems="center" gap={24} mt={4}>
          <Text color={colors.text[1]} fontSize={11}>
            <Text fontWeight="bold">Học viên: </Text>
            {item?.personnelCount}
          </Text>
          <Text color={colors.text[1]} fontSize={11}>
            <Text fontWeight="bold">Chỉ huy: </Text>
          </Text>
        </Box>
        <Box flex={1} flexDirection="row" alignItems="center" gap={6} mt={10}>
          <StarSvg />
          <Text color={colors.text[1]} fontSize={11}>
            Đại đội trưởng:
          </Text>
        </Box>
      </Box>
      <Box gap={12} alignItems="center">
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.containerBox}
          onPress={onOpenReportHistory}
        >
          <Text fontSize={FontSize.SMALL} color={colors.primary[20]}>
            Lịch sử báo QS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.containerBox}
          onPress={onReportNumber}
        >
          <Text fontSize={FontSize.SMALL} color={colors.primary[20]}>
            Báo cáo quân số
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: 12,
    marginBottom: 16,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    // Android shadow
    elevation: 6,
  },

  containerBox: {
    borderWidth: 1,
    borderColor: '#3867F8',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
