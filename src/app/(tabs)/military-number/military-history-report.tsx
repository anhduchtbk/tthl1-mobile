import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { DayElementScrollView } from '@/features/home/timetable';
import { colors } from '@/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet } from 'react-native';

type PropsHistoryElements = {
  schedule: string; // tiêu đề buổi điểm danh
  bgColor?: string;
  borderColor?: string;
  totalStudents?: number;
  absentStudents?: number;
  actualStudents?: number;
  listStudentGroup?: PropsStudentGroup[];
};

type PropsStudentGroup = {
  numberGroup?: number;
  reseasonAbsent?: string;
  absentStudents?: string[];
};

function StudentGroup({
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

function HistoryElements({
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

export default function MilitaryNumberScreen() {
  const dictColors = {
    1: { bgColor: colors.primary[40], borderColor: colors.primary[30] },
    2: { bgColor: colors.primary[50], borderColor: colors.primary[80] },
    3: { bgColor: colors.primary[70], borderColor: colors.primary[90] },
  };

  let tempData1 = [
    {
      reseasonAbsent: 'Ốm đau',
      absentStudents: ['Nguyễn Văn B', 'Trần Thị C', 'Nguyễn Anh Tuấn'],
    },
    {
      reseasonAbsent: 'Có việc gia đình',
      absentStudents: ['Lê Văn D'],
    },
  ];

  let tempData2 = [
    {
      reseasonAbsent: 'Công tác đột xuất',
      absentStudents: ['Phạm Thị E', 'Võ Văn F'],
    },
  ];

  return (
    <Box px={16}>
      <ScreenHeader title="LỊCH SỬ BÁO QUÂN SỐ" subTitle="ĐẠI ĐỘI 2 - VB2" />
      <ScrollView>
        <Box mt={20} gap={16}>
          <FilterButton />
          <DayElementScrollView />

          <HistoryElements
            bgColor={dictColors[1].bgColor}
            borderColor={dictColors[1].borderColor}
            schedule="Điểm danh Thể dục buổi sáng"
            totalStudents={127}
            absentStudents={2}
            actualStudents={125}
            listStudentGroup={tempData1}
          />

          <HistoryElements
            bgColor={dictColors[2].bgColor}
            borderColor={dictColors[2].borderColor}
            schedule="Điểm danh Ăn cơm sáng"
            totalStudents={127}
            absentStudents={2}
            actualStudents={125}
            listStudentGroup={tempData2}
          />

          <HistoryElements
            bgColor={dictColors[3].bgColor}
            borderColor={dictColors[3].borderColor}
            schedule="Điểm danh Học buổi sáng (Võ thuật CAND)"
          />
        </Box>
      </ScrollView>
      
    </Box>
  );
}

const styles = StyleSheet.create({
  txtSchedule: {
    fontWeight: 800,
    lineHeight: 20,
  },
  
});
