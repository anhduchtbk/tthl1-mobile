import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';

export function FacilityHeader({
  onLendFacility,
  onBackFacility,
}: {
  onLendFacility: () => void;
  onBackFacility: () => void;
}) {
  return (
    <Box>
      <Box alignItems="center" gap={8}>
        <Text
          fontSize={FontSize.EXTRA_EXTRA_LARGE}
          fontWeight="bold"
          color={colors.text[3]}
        >
          Súng tiểu liên AK-47
        </Text>
        <Text fontSize={FontSize.SMALL} color={colors.text[1]}>
          Thuộc quản lý của Tiều đoàn 2 - TTHL1
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
            500
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Tổng số
          </Text>
        </Box>
        <Box flex={1} alignItems="center" gap={4}>
          <Text fontSize={15} fontWeight="bold" color={colors.text[3]}>
            400
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Đã bàn giao
          </Text>
        </Box>
        <Box flex={1} alignItems="center" gap={4}>
          <Text fontSize={15} fontWeight="bold" color={colors.text[3]}>
            100
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Còn lại
          </Text>
        </Box>
      </Box>

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={16}
        pb={16}
        borderBottomWidth={1}
        borderBottomColor={'#F0F0F0'}
      >
        <Box
          flex={1}
          bgColor={colors.primary[10]}
          borderWidth={1}
          borderColor={colors.blue}
          borderRadius={16}
          py={9}
          px={30}
          onPress={onLendFacility}
        >
          <Text color={colors.white} align="center">
            Đăng ký{'\n'}mượn vật chất
          </Text>
        </Box>
        <Box
          flex={1}
          bgColor={colors.white}
          borderWidth={1}
          borderColor={colors.blue}
          borderRadius={16}
          py={9}
          px={30}
          onPress={onBackFacility}
        >
          <Text color={colors.blue} align="center">
            Đăng ký{'\n'}trả vật chất
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
