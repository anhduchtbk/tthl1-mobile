import CaptainSvg from '@/assets/icons/captain-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

type ItemProps = {
  name: string;
  noOfCommander: number;
  noOfStudent?: number;
  commanderName: string;
  isLeader: boolean;
};

type RenderItemProps = {
  item: ItemProps;
};

export function RenderFacilityItem(itemProps: RenderItemProps) {
  const router = useRouter();

  const onSeeMore = (value: string) => {
    router.push({
      pathname: '/(tabs)/home/manage-list-facility',
      params: { value },
    });
  };

  return (
    <Box style={styles.card}>
      <Text color={colors.text[3]} fontWeight="bold">
        {itemProps.item.name}
      </Text>
      <Box flexDirection="row" alignItems="center" gap={36} mt={4}>
        {!itemProps.item.isLeader && (
          <Text color={colors.text[1]} fontSize={11}>
            Học viên: {itemProps.item.noOfStudent}
          </Text>
        )}
        <Text color={colors.text[1]} fontSize={11}>
          Chỉ huy: {itemProps.item.noOfCommander}
        </Text>
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flex={1}>
          <Box flexDirection="row" alignItems="center" gap={2}>
            <CaptainSvg width={13} height={13} />
            <Text color={colors.text[1]} fontSize={11}>
              {itemProps.item.isLeader ? 'Tiểu đoàn trưởng' : 'Đại đội trưởng'}:{' '}
              {itemProps.item.commanderName}
            </Text>
          </Box>
        </Box>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.containerBox}
          onPress={() => onSeeMore(itemProps.item.name)}
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
    borderRadius: 10,

    padding: 16,
    marginBottom: 16,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
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
