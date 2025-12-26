import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { HISTORY_TYPE } from '@/constants/value';
import { formatHistoryType } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { PropsStudentGroup, StudentGroup } from './StudentGroup';

interface History {
  type: HISTORY_TYPE; // tiêu đề buổi điểm danh
  totalStudents: number;
  absentStudents: number;
  actualStudents: number;
  listStudentGroup?: PropsStudentGroup[];
}

export function HistoryElement({ item }: { item: History }) {
  return (
    <Box gap={4}>
      <Box
        backgroundColor={formatHistoryType(item.type).bgColor}
        flexDirection="row"
        alignItems="center"
        gap={8}
        h={20}
        mb={8}
      >
        <Box
          w={4}
          h={'100%'}
          borderRadius={3}
          bgColor={formatHistoryType(item.type).borderColor}
        />
        <Text fontWeight="bold" color={'#7C7C7C'}>
          {formatHistoryType(item.type).scheduleType}
        </Text>
      </Box>
      <Box gap={2}>
        <Text fontWeight="bold" color={colors.text[3]}>
          Tổng quân số: {item.totalStudents}
        </Text>
        <Text fontWeight="bold" color={colors.text[3]}>
          Vắng: {item.absentStudents}
        </Text>
        <Text fontWeight="bold" color={colors.text[3]}>
          Quân số thực tế: {item.actualStudents}
        </Text>
      </Box>
      <Box gap={8}>
        {item.listStudentGroup?.map((group, index) => (
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
