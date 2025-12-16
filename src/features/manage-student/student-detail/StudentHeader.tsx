import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';

export function StudentHeader() {
  return (
    <Box>
      <Box alignItems="center" gap={8}>
        <Text
          fontSize={FontSize.EXTRA_EXTRA_LARGE}
          fontWeight="bold"
          color={colors.text[3]}
        >
          Nguyễn Thị A
        </Text>
        <Text fontSize={FontSize.SMALL} color={colors.text[1]}>
          Học viện An ninh nhân dân - T01
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
            A1B1C1
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Đơn vị
          </Text>
        </Box>
        <Box flex={1} alignItems="center" gap={4}>
          <Text fontSize={15} fontWeight="bold" color={colors.text[3]}>
            A Trưởng
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Chức vụ
          </Text>
        </Box>
        <Box flex={1} alignItems="center" gap={4}>
          <Text fontSize={15} fontWeight="bold" color={colors.text[3]}>
            01/01/2000
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Ngày sinh
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
