import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';

export function SettingHeader() {
  return (
    <Box>
      <Box alignItems="center" gap={8}>
        <Text
          fontSize={FontSize.EXTRA_EXTRA_LARGE}
          fontWeight="bold"
          color={colors.text[3]}
        >
          Đại uý Nguyễn Thị Mai
        </Text>
        <Text
          fontSize={FontSize.SMALL}
          fontWeight="bold"
          color={colors.text[1]}
        >
          Tiểu đoàn 2 - TTHL và Bồi dưỡng nghiệp vụ số 1
        </Text>
      </Box>
      <Box
        mt={14}
        py={4}
        pb={16}
        borderBottomWidth={1}
        borderBottomColor={'#F0F0F0'}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flex={1} alignItems="center" gap={4}>
          <Text fontSize={15} fontWeight="bold" color={colors.text[3]}>
            Ban huấn luyện
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Đơn vị
          </Text>
        </Box>
        <Box flex={1} alignItems="center" gap={4}>
          <Text fontSize={15} fontWeight="bold" color={colors.text[3]}>
            Cán bộ
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Chức vụ
          </Text>
        </Box>
        <Box flex={1} alignItems="center" gap={4}>
          <Text fontSize={15} fontWeight="bold" color={colors.text[3]}>
            01/01/1995
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Ngày sinh
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
