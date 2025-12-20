import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';
import { DayElementScrollView } from '../schedule/DayElement';
import { Schedule } from '../schedule/Schedule';

export function Timetable() {
  const router = useRouter();

  return (
    <Box style={styles.timetable}>
      <Box style={styles.headerTimetable}>
        <Text style={styles.txtHeaderSchedule}>Thời khoá biểu (C1 - VB2)</Text>
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
      <Box
        borderRadius={8}
        alignItems="center"
        bgColor={colors.primary[40]}
        borderWidth={1}
        borderColor={colors.primary[30]}
        p={12}
        onPress={() => router.push('/schedule')}
      >
        <Text color={colors.primary[20]}>Xem chi tiết</Text>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  timetable: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
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
