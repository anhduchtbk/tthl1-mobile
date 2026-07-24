import { Timetable } from '@/api/types/timetable';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatRank, formatScheduleType } from '@/lib/utils';
import { colors } from '@/theme/colors';

export function ScheduleItem({ item }: { item: Timetable }) {
  return (
    <Box gap={8}>
      <Box
        backgroundColor={formatScheduleType(item?.session).bgColor}
        flexDirection="row"
        alignItems="center"
        gap={8}
        h={20}
      >
        <Box
          w={4}
          h={'100%'}
          borderRadius={3}
          bgColor={formatScheduleType(item?.session).borderColor}
        />
        <Text fontWeight="bold" color={'#7C7C7C'}>
          {formatScheduleType(item?.session).scheduleType} (
          {item?.startTime?.substring(0, 5)} - {item?.endTime?.substring(0, 5)})
        </Text>
      </Box>
      <Box gap={2}>
        <Text fontWeight="bold" color={colors.text[3]}>
          {item?.subject?.name}
        </Text>
        <Text fontSize={13} color={colors.text[1]}>
          Ghi chú: {item?.content || '---'}
        </Text>
        <Text fontSize={13} fontWeight="bold" color={colors.text[1]}>
          CBHL: {formatRank(item?.teacher?.rank)} {item?.teacher?.fullName}
        </Text>
      </Box>
    </Box>
  );
}
