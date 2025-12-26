import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { SCHEDULE_TYPE } from '@/constants/value';
import { formatScheduleType } from '@/lib/utils';
import { colors } from '@/theme/colors';

export interface Schedule {
  id: number;
  type: SCHEDULE_TYPE;
  subjectFullname: string;
  lessonNumber: number;
  isDone?: boolean;
  teacherFullname: string;
}

export function ScheduleItem({ item }: { item: Schedule }) {
  return (
    <Box gap={8}>
      <Box
        backgroundColor={formatScheduleType(item?.type).bgColor}
        flexDirection="row"
        alignItems="center"
        gap={8}
        h={20}
      >
        <Box
          w={4}
          h={'100%'}
          borderRadius={3}
          bgColor={formatScheduleType(item?.type).borderColor}
        />
        <Text fontWeight="bold" color={'#7C7C7C'}>
          {formatScheduleType(item?.type).scheduleType} (7:30 - 11:00)
        </Text>
      </Box>
      <Box gap={2}>
        <Text fontWeight="bold" color={colors.text[3]}>
          {item.subjectFullname}
        </Text>
        <Text fontSize={13} color={colors.text[1]}>
          Buổi: {item.lessonNumber} {item.isDone ? '(XONG)' : ''}
        </Text>
        <Text fontSize={13} fontWeight="bold" color={colors.text[1]}>
          CBHL: {item.teacherFullname}
        </Text>
      </Box>
    </Box>
  );
}
