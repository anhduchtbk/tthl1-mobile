import StarSvg from '@/assets/icons/star-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatNotificationAmount } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

type ItemProps = {
  notificationAmount: number;
  companyFullname: string;
  facilityFullname: string;
  companyAmount: number;
  commanderAmount: number;
  commanderFullname: string;
};

type RenderItemProps = {
  item: ItemProps;
};

export function RenderCompanyItem({ item }: RenderItemProps) {
  const router = useRouter();

  const onOpenDetail = () => {
    router.push('/home/notification/facility-request');
  };

  const onOpenHistory = () => {
    router.push('/home/notification/history-request');
  };

  return (
    <Box
      style={[
        styles.card,
        {
          backgroundColor: item.notificationAmount
            ? 'rgba(56, 103, 248, 0.15)'
            : colors.white,
        },
      ]}
    >
      {item.notificationAmount ? (
        <Box
          w={18}
          h={18}
          borderRadius={18}
          pos="absolute"
          top={8}
          right={8}
          bgColor={colors.red}
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize={10} color={colors.white} fontWeight="bold">
            {formatNotificationAmount(item.notificationAmount)}
          </Text>
        </Box>
      ) : (
        <></>
      )}
      <Box flex={1}>
        <Text color={colors.text[1]} fontWeight="bold">
          {item.companyFullname}
        </Text>
        <Box h={4} />
        <Text color={colors.text[3]} fontWeight="bold">
          Yêu cầu mượn {item.facilityFullname}
        </Text>
        <Box flexDirection="row" alignItems="center" gap={24} mt={4}>
          <Text color={colors.text[1]} fontSize={11}>
            <Text fontWeight="bold">Học viên: </Text>
            {item.companyAmount}
          </Text>
          <Text color={colors.text[1]} fontSize={11}>
            <Text fontWeight="bold">Chỉ huy: </Text>
            {item.commanderAmount}
          </Text>
        </Box>
        <Box flex={1} flexDirection="row" alignItems="center" gap={6} mt={10}>
          <StarSvg />
          <Text color={colors.text[1]} fontSize={11}>
            Người yêu cầu: Đại uý {item.commanderFullname}
          </Text>
        </Box>
      </Box>
      <Box flexDirection="row" alignItems="center" gap={8}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.containerBox}
          onPress={onOpenDetail}
        >
          <Text
            fontSize={FontSize.SMALL}
            color={colors.primary[20]}
            align="center"
          >
            Chi tiết yêu cầu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.containerBox, { backgroundColor: colors.blue }]}
          onPress={onOpenHistory}
        >
          <Text fontSize={FontSize.SMALL} color={colors.white} align="center">
            Lịch sử
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
    flex: 1,
    borderWidth: 1,
    borderColor: '#3867F8',
    borderRadius: 16,
    paddingVertical: 8,
  },
});
