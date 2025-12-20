import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { DayElementScrollView } from '@/features/home/timetable';
import { HistoryElements } from '@/features/manage-student/history/HistoryElements';
import { colors } from '@/theme/colors';
import { ScrollView } from 'react-native';

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
