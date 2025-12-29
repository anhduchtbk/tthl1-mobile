import { Equipment } from '@/api/types/inventory';
import StarSvg from '@/assets/icons/star-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

type RenderItemProps = {
  item: Equipment;
};

export function RenderFacilityByUnitItem({ item }: RenderItemProps) {
  const router = useRouter();

  const onSeeMore = () => {
    router.push({
      pathname: '/home/facility-detail',
      params: {
        equipment_id: item.id,
      },
    });
  };

  return (
    <Box style={styles.card}>
      <Text color={colors.text[3]} fontWeight="bold">
        {item.name}
      </Text>
      <Box flexDirection="row" alignItems="center" gap={36} mt={4}>
        <Text color={colors.text[1]} fontSize={11}>
          <Text fontWeight="bold" color={colors.text[1]}>
            Tổng số:{' '}
          </Text>
          {item.quantity}
        </Text>
        <Text color={colors.text[1]} fontSize={11}>
          <Text fontWeight="bold" color={colors.text[1]}>
            Còn lại:{' '}
          </Text>
          {item.remain}
        </Text>
      </Box>
      <Box flexDirection="row" alignItems="flex-end">
        <Box flex={1} flexDirection="row" alignItems="center" gap={6}>
          <StarSvg />
          <Text color={colors.text[1]} fontSize={11} style={{ flex: 1 }}>
            Phụ trách:
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
