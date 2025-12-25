import { Student } from '@/api/types/student';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatDate, formatUnitRank } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';

export function StudentHeader({ studentDetail }: { studentDetail: Student }) {
  return (
    <Box>
      <Box alignItems="center" gap={8}>
        <Text
          fontSize={FontSize.EXTRA_EXTRA_LARGE}
          fontWeight="bold"
          color={colors.text[3]}
        >
          {studentDetail?.fullName}
        </Text>
        <Text
          fontSize={FontSize.SMALL}
          fontWeight="bold"
          color={colors.text[1]}
        >
          {studentDetail?.university}
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
            A{studentDetail.squad}B{studentDetail.platoon}C
            {studentDetail.company?.name}
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Đơn vị
          </Text>
        </Box>
        <Box flex={1} alignItems="center" gap={4}>
          <Text fontSize={15} fontWeight="bold" color={colors.text[3]}>
            {formatUnitRank(studentDetail.unitRank)}
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Chức vụ
          </Text>
        </Box>
        <Box flex={1} alignItems="center" gap={4}>
          <Text fontSize={15} fontWeight="bold" color={colors.text[3]}>
            {formatDate(studentDetail.birthday)}
          </Text>
          <Text fontSize={13} color={colors.text[1]}>
            Ngày sinh
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
