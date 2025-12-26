import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { SCHEDULE_TYPE } from '@/constants/value';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { DayElementScrollView } from './DayElement';
import { ScheduleItem } from './ScheduleItem';

type ScheduleDetailProps = {
  week?: number;
  isHome?: boolean;
};

const fakeData = [
  {
    id: 1,
    type: SCHEDULE_TYPE.MORNING,
    subjectFullname: 'Kỹ thuật võ thuật CAND',
    lessonNumber: 16,
    isDone: true,
    teacherFullname: 'Đại uý Nguyễn Văn A',
  },
  {
    id: 2,
    type: SCHEDULE_TYPE.AFTERNOON,
    subjectFullname: 'Kỹ thuật võ thuật CAND',
    lessonNumber: 3,
    isDone: false,
    teacherFullname: 'Đại uý Nguyễn Văn A',
  },
  {
    id: 3,
    type: SCHEDULE_TYPE.AFTERSCHOOL,
    subjectFullname: 'Kỹ thuật võ thuật CAND',
    lessonNumber: 4,
    isDone: false,
    teacherFullname: 'Đại uý Nguyễn Văn A',
  },
];

export function ScheduleDetail({ week, isHome }: ScheduleDetailProps) {
  const router = useRouter();

  return (
    <Box style={styles.timetable}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize={isHome ? 20 : 15} fontWeight="bold" color={'#333'}>
          Thời khoá biểu (C1 - VB2)
        </Text>
        {!isHome && (
          <Text fontSize={12} color={colors.primary[20]}>
            Tuần {week}{' '}
          </Text>
        )}
      </Box>
      <DayElementScrollView />
      <Box gap={8}>
        {fakeData.map((item, index) => {
          return <ScheduleItem item={item} key={index} />;
        })}
      </Box>
      {isHome && (
        <Box
          h={40}
          borderRadius={8}
          alignItems="center"
          justifyContent="center"
          bgColor={colors.primary[40]}
          borderWidth={1}
          borderColor={colors.primary[30]}
          onPress={() => router.push('/schedule')}
        >
          <Text fontWeight="semibold" color={colors.primary[10]}>
            Xem chi tiết
          </Text>
        </Box>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  timetable: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    paddingTop: 20,
    borderRadius: 16,
    gap: 20,
    marginBottom: 16,

    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
});
