import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { DayElementScrollView } from '@/features/home/timetable';

export default function MilitaryNumberScreen() {
  return (
    <Box px={16}>
      <ScreenHeader title="LỊCH SỬ BÁO QUÂN SỐ" subTitle="ĐẠI ĐỘI 2 - VB2" />

      <Box>
        <DayElementScrollView />
      </Box>
    </Box>
  );
}
