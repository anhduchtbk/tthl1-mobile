import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';
import { DayElementScrollView } from './DayElement';
import { Schedule } from './Schedule';

type ScheduleDetailProps = {
  week?: number;
};

export function ScheduleDetail({ week }: ScheduleDetailProps) {
  return (
    <Box style={styles.timetable}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize={15} fontWeight="bold">
          Thời khoá biểu (C1 - VB2)
        </Text>
        <Text fontSize={12} color={colors.primary[20]}>
          {' '}
          Tuần {week}{' '}
        </Text>
      </Box>
      <DayElementScrollView />
      <Schedule
        schedule="Sáng"
        subject="Kỹ thuật võ thuật CAND"
        lesson={16}
        isDone={true}
        teacher="Đại uý Nguyễn Văn A"
        bgColor={colors.primary[40]}
        borderColor={'#91BAFE'}
      />
      <Schedule
        schedule="Chiều"
        subject="Kỹ thuật võ thuật CAND"
        lesson={16}
        isDone={true}
        teacher="Đại uý Nguyễn Văn A"
        bgColor={colors.primary[50]}
        borderColor={'#FEF08A'}
      />
      <Schedule
        schedule="Ngoại khoá"
        subject="Kỹ thuật võ thuật CAND"
        lesson={16}
        isDone={true}
        teacher="Đại uý Nguyễn Văn A"
        bgColor={colors.primary[70]}
        borderColor={'#20C74B'}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  timetable: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,

    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
    gap: 20,
  },
  schedule: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtHeaderSchedule: {
    fontFamily: 'Mulish',
    fontWeight: 700,
    fontSize: 20,
  },
  headerTimetable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
