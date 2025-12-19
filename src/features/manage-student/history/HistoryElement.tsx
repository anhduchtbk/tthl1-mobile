import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';
import { PropsStudentGroup, StudentGroup } from './StudentGroup';

type PropsHistoryElements = {
  schedule: string; // tiêu đề buổi điểm danh
  bgColor?: string;
  borderColor?: string;
  totalStudents?: number;
  absentStudents?: number;
  actualStudents?: number;
  listStudentGroup?: PropsStudentGroup[];
};

export function HistoryElements({
  schedule,
  bgColor,
  borderColor,
  totalStudents,
  absentStudents,
  actualStudents,
  listStudentGroup,
}: PropsHistoryElements) {
  return (
    <Box>
      <Box
        backgroundColor={bgColor}
        flexDirection="row"
        alignItems="center"
        gap={12}
      >
        <Box
          borderWidth={3}
          borderColor={borderColor}
          borderRadius={3}
          style={{ minHeight: 20 }}
          backgroundColor={colors.black}
        />
        <Text style={styles.txtSchedule} fontSize={14} color={'#777777'}>
          {schedule}
        </Text>
      </Box>
      <Box py={8} px={4} gap={4}>
        <Text fontWeight="bold" fontSize={14}>
          Tổng quân số: {totalStudents}
        </Text>
        <Text fontWeight="bold" fontSize={14}>
          Vắng: {absentStudents}
        </Text>
        <Text fontWeight="bold" fontSize={14}>
          Quân số thực tế: {actualStudents}
        </Text>
        {listStudentGroup?.map((group, index) => (
          <StudentGroup
            key={index}
            numberGroup={index + 1}
            reseasonAbsent={group.reseasonAbsent}
            absentStudents={group.absentStudents}
          />
        ))}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  txtSchedule: {
    fontWeight: 800,
    lineHeight: 20,
  },
});