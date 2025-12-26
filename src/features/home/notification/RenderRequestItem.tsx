import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

interface RowItem {
  title: string;
  type: string;
  value: string | number;
}

type RowItemProps = PropsWithChildren<{
  rowItem: {
    infos: RowItem[];
  };
  isConfirm?: boolean;
  onAcceptRequest?: () => void;
  onRejectRequest?: () => void;
}>;

export const RenderRequestItem = ({
  rowItem,
  isConfirm,
  onAcceptRequest,
  onRejectRequest,
}: RowItemProps) => {
  const router = useRouter();

  const onOpenHistoryRequest = () => {
    router.push('/home/notification/history-request');
  };

  return (
    <Box style={styles.containerItem}>
      {rowItem.infos.map((item, index) => {
        return (
          <Box
            key={index}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            gap={16}
          >
            <Text fontWeight="bold" color={colors.text[3]}>
              {item.title}:
            </Text>
            {item.type === 'status' ? (
              <Box
                py={4}
                px={10}
                borderRadius={16}
                bgColor={
                  item.value === 0
                    ? '#FEBC2F'
                    : item.value === 1
                    ? '#27C840'
                    : '#FF5F57'
                }
              >
                <Text fontSize={FontSize.SMALL} color={colors.white}>
                  {item.value === 0
                    ? 'Chờ duyệt'
                    : item.value === 1
                    ? 'Đồng ý'
                    : 'Từ chối'}
                </Text>
              </Box>
            ) : (
              <Box
                flex={1}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
                gap={16}
              >
                <Text
                  fontSize={14}
                  color={colors.text[3]}
                  align="right"
                  fontWeight={
                    item.type === 'facilityFullname' || item.type === 'quantity'
                      ? 'bold'
                      : 'regular'
                  }
                >
                  {item.value}
                </Text>
                {item.type === 'requestedUnit' && (
                  <Box
                    w={60}
                    h={22}
                    justifyContent="center"
                    alignItems="center"
                    borderWidth={1}
                    borderColor={colors.primary[20]}
                    borderRadius={16}
                    onPress={onOpenHistoryRequest}
                  >
                    <Text fontSize={FontSize.SMALL} color={colors.blue}>
                      Lịch sử
                    </Text>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        );
      })}
      {isConfirm && (
        <Box flexDirection="row" alignItems="center" gap={8} mt={9}>
          <Box flex={1}>
            <Button
              variant="outlined"
              text="Từ chối"
              size="small"
              onPress={onRejectRequest}
            />
          </Box>
          <Box flex={1}>
            <Button text="Xác nhận" size="small" onPress={onAcceptRequest} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 16,
    gap: 7,
    borderWidth: 0.5,
    borderColor: '#E5CDEE',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
