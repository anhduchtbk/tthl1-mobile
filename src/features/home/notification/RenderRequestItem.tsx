import Button from '@/components/common/Button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { STATUS_OPTIONS } from '@/constants/option';
import { STATUS_TYPE } from '@/constants/value';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

interface RowItem {
  title: string;
  type: string;
  value: string | number;
  isInvisible?: boolean;
}

type RowItemProps = PropsWithChildren<{
  rowItem: {
    infos: RowItem[];
  };
  company?: {
    id: number;
    name: string;
  };
  equipment?: {
    id: number;
    name: string;
  };
  isConfirm?: boolean;
  onAcceptRequest?: () => void;
  onRejectRequest?: () => void;
}>;

export const RenderRequestItem = ({
  rowItem,
  company,
  equipment,
  isConfirm,
  onAcceptRequest,
  onRejectRequest,
}: RowItemProps) => {
  const router = useRouter();

  const onOpenHistoryRequest = () => {
    router.push({
      pathname: '/home/notification/history-request',
      params: {
        companyItem: JSON.stringify(company),
        equipmentItem: JSON.stringify(equipment),
      },
    });
  };

  return (
    <Box style={styles.containerItem}>
      {rowItem?.infos?.map((item, index) => {
        return item?.isInvisible ? null : (
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
                  item.value === STATUS_TYPE.PENDING
                    ? '#FEBC2F'
                    : item.value === STATUS_TYPE.APPROVED
                    ? '#27C840'
                    : '#FF5F57'
                }
              >
                <Text fontSize={FontSize.SMALL} color={colors.white}>
                  {STATUS_OPTIONS.find(status => status.value === item.value)
                    ?.label || 'Không xác định'}
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
                  {item.value || '-'}
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
