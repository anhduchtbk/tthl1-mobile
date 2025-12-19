import { Box } from "@/components/common/Layout/Box";
import { Text } from "@/components/common/Text/Text";
import { colors } from "@/theme/colors";

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
      borderWidth={1}
      borderColor={colors.primary[10]}
      borderRadius={10}
      borderStyle="dashed"
      py={4}
      px={8}
      gap={4}
    >
      <Text fontWeight="bold" fontSize={14} color={colors.primary[10]}>
        Nhóm học viên {numberGroup}
      </Text>
      <Text fontWeight="bold" fontSize={14}>
        Lý do: {reseasonAbsent}
      </Text>
      <Text fontWeight="bold" fontSize={14}>
        Học viên vắng: {absentStudents?.join(', ')}
      </Text>
    </Box>
  );
}