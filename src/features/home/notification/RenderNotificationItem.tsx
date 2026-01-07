import { TransactionPending } from '@/api/types/transaction';
import StarSvg from '@/assets/icons/star-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatDate } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

type RenderItemProps = {
  item: TransactionPending;
};

export function RenderNotificationItem({ item }: RenderItemProps) {
  const router = useRouter();

  const onReportNumber = () => {
    router.push({
      pathname: '/home/notification/facility-request',
      params: {
        transactionItem: JSON.stringify(item),
      },
    });
  };

  return (
    <Box style={styles.card}>
      <Text color={colors.text[3]} fontWeight="bold">
        Yêu cầu {item?.transactionType === 'BORROW' ? 'mượn' : 'trả'}{' '}
        {item.trainingEquipment?.name}
      </Text>
      <Box h={4} />
      <Text color={colors.text[1]} fontSize={11}>
        <Text fontWeight="bold" color={colors.text[1]}>
          Đơn vị yêu cầu:{' '}
        </Text>
        C{item.user?.company?.name} -
      </Text>
      <Box flexDirection="row" alignItems="center" gap={24} mt={4}>
        <Text color={colors.text[1]} fontSize={11}>
          <Text fontWeight="bold" color={colors.text[1]}>
            Số lượng:{' '}
          </Text>
          {item.quantity}
        </Text>
        <Text color={colors.text[1]} fontSize={11}>
          <Text fontWeight="bold" color={colors.text[1]}>
            Thời gian tạo:{' '}
          </Text>
          {formatDate(item?.createdAt)}
        </Text>
      </Box>
      <Box flex={1} flexDirection="row" alignItems="flex-end">
        <Box flex={1} flexDirection="row" alignItems="center" gap={6}>
          <StarSvg />
          <Text color={colors.text[1]} fontSize={11} style={{ flex: 1 }}>
            Người yêu cầu: Đại uý {item.user?.fullName}
          </Text>
        </Box>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.containerBox}
          onPress={onReportNumber}
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
    borderRadius: 10,

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
