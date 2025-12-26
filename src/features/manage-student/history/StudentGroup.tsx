import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';

export type PropsStudentGroup = {
  numberGroup?: number;
  reseasonAbsent?: string;
  absentStudents?: string[];
};

export function StudentGroup({
  numberGroup,
  reseasonAbsent,
  absentStudents,
}: PropsStudentGroup) {
  return (
    <Box
      borderWidth={0.5}
      borderColor={colors.primary[10]}
      borderRadius={10}
      borderStyle="dashed"
      py={4}
      px={8}
      gap={2}
    >
      <Text fontWeight="bold" color={colors.primary[10]}>
        Nhóm học viên {numberGroup}
      </Text>
      <Text fontWeight="bold">Lý do: {reseasonAbsent}</Text>
      <Text fontWeight="bold">
        Học viên vắng:{' '}
        <Text fontWeight="bold" underline>
          {absentStudents?.join(', ')}
        </Text>
      </Text>
    </Box>
  );
}
