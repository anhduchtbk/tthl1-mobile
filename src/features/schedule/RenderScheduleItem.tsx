import { Company } from '@/api/types/company';
import StarSvg from '@/assets/icons/star-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

type RenderItemProps = {
  item: Company;
};

export function RenderScheduleItem({ item }: RenderItemProps) {
  const router = useRouter();

  const onSeeMore = () => {
    router.push({
      pathname: '/schedule/schedule-detail',
      params: { companyItem: JSON.stringify(item) },
    });
  };

  return (
    <Box style={styles.card}>
      <Text color={colors.text[3]} fontWeight="bold">
        Đại đội {item?.name} - {formatEducation(item?.course?.type)}
      </Text>
      <Box flexDirection="row" alignItems="center" gap={24} mt={4}>
        <Text color={colors.text[1]} fontSize={11}>
          <Text fontWeight="bold" color={colors.text[1]}>
            Học viên:{' '}
          </Text>
          {item.personnelCount}
        </Text>
        <Text color={colors.text[1]} fontSize={11}>
          <Text fontWeight="bold" color={colors.text[1]}>
            Chỉ huy:{' '}
          </Text>
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="flex-end">
        <Box flex={1} flexDirection="row" alignItems="center" gap={6}>
          <StarSvg />
          <Text color={colors.text[1]} fontSize={11} style={{ flex: 1 }}>
            Đại đội trưởng:
          </Text>
        </Box>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.containerBox}
          onPress={onSeeMore}
        >
          <Text fontSize={FontSize.SMALL} color={colors.primary[20]}>
            Xem chi tiết
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
    borderRadius: 16,

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
