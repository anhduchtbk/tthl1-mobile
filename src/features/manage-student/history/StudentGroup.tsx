import { Student } from '@/api/types/student';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';

export type PropsStudentGroup = {
  numberGroup?: number;
  reasonAbsent?: string;
  absentStudents?: Student[];
};

export function StudentGroup({
  numberGroup,
  reasonAbsent,
  absentStudents = [],
}: PropsStudentGroup) {
  console.log('dddd', absentStudents);

  const router = useRouter();

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

      <Text fontWeight="bold">Lý do: {reasonAbsent}</Text>

      <Text fontWeight="bold">Học viên vắng:</Text>

      <Box flexDirection="row" flexWrap="wrap" gap={2}>
        {absentStudents.map((student, index) => (
          <Text
            key={index}
            fontWeight="bold"
            underline
            color={colors.primary[10]}
            onPress={() => {
              router.push({
                pathname: '/manage-student/student-detail',
                params: { studentDetail: JSON.stringify(student) },
              });
            }}
          >
            {student?.fullName}
            {index < absentStudents.length - 1 ? ', ' : ''}
          </Text>
        ))}
      </Box>
    </Box>
  );
}
