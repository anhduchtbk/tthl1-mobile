import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { DayElementScrollView } from '@/features/home/timetable';
import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

type PropsHistoryElements = {
  schedule: string; // tiêu đề buổi điểm danh
  bgColor?: string;
  borderColor?: string;
};

function StudentGroup() {
  return (
    <Box>
      <Text>Nhóm học viên:</Text>
      <Text>Nhóm học viên:</Text>
      <Text>Nhóm học viên:</Text>
    </Box>
  );
}

function HistoryElements({
  schedule,
  bgColor,
  borderColor,
}: PropsHistoryElements) {
  return (
    <Box>
      <Box
        backgroundColor={bgColor}
        p={12}
        borderRadius={12}
        borderLeftWidth={4}
        borderLeftColor={borderColor}
      >
        <Text style={styles.txtSchedule} fontSize={13} color={'#777777'}>
          {schedule} (7:30 - 11:00)
        </Text>
      </Box>
      <Box pt={8}>
        <Text>Tổng quân số:</Text>
        <Text>Vắng:</Text>
        <Text>Quân số thực tế:</Text>
      </Box>
      <StudentGroup />
    </Box>
  );
}

export default function MilitaryNumberScreen() {
  return (
    <Box px={16}>
      <ScreenHeader title="LỊCH SỬ BÁO QUÂN SỐ" subTitle="ĐẠI ĐỘI 2 - VB2" />
      <Box mt={20} gap={16}>
        <FilterButton />
        <DayElementScrollView />

        <HistoryElements
          bgColor={colors.primary[40]}
          borderColor={colors.primary[30]}
          schedule="Sáng"
        />
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
