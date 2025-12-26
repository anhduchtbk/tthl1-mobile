import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { DateTimePickerModal } from '@/components/common/Modal/DateTimePickerModal';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { HISTORY_TYPE } from '@/constants/value';
import { HistoryElement } from '@/features/manage-student/history/HistoryElement';
import MilitaryHistoryFilterBottomSheet from '@/features/military-number/military-history-report/MilitaryHistoryFilterBottomSheet';
import { DayElementScrollView } from '@/features/schedule/DayElement';
import { colors } from '@/theme/colors';
import { useState } from 'react';
import { ScrollView } from 'react-native';

const fakeData = [
  {
    id: 1,
    type: HISTORY_TYPE.MORNING,
    totalStudents: 127,
    absentStudents: 2,
    actualStudents: 125,
    listStudentGroup: [
      {
        reseasonAbsent: 'Ốm đau',
        absentStudents: ['Nguyễn Văn B', 'Trần Thị C', 'Nguyễn Anh Tuấn'],
      },
      {
        reseasonAbsent: 'Có việc gia đình',
        absentStudents: ['Lê Văn D'],
      },
    ],
  },
  {
    id: 2,
    type: HISTORY_TYPE.AFTERNOON,
    totalStudents: 127,
    absentStudents: 2,
    actualStudents: 125,
    listStudentGroup: [
      {
        reseasonAbsent: 'Công tác đột xuất',
        absentStudents: ['Phạm Thị E', 'Võ Văn F'],
      },
    ],
  },
];

export default function MilitaryNumberScreen() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDateModal, setIsOpenDateModal] = useState(false);

  const [dateType, setDateType] = useState<'from' | 'to'>('from');
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="LỊCH SỬ BÁO QUÂN SỐ" subTitle="ĐẠI ĐỘI 2 - VB2" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box px={16} gap={16}>
          <FilterButton onOpenFilter={() => setIsOpenModal(true)} />
          <DayElementScrollView />

          <Box gap={12}>
            {fakeData.map((item, index) => {
              return <HistoryElement item={item} key={index} />;
            })}
          </Box>
        </Box>
      </ScrollView>

      <MilitaryHistoryFilterBottomSheet
        isOpen={isOpenModal}
        fromDate={fromDate}
        toDate={toDate}
        onSelectFromDate={() => {
          setDateType('from');
          setIsOpenDateModal(true);
        }}
        onSelectToDate={() => {
          setDateType('to');
          setIsOpenDateModal(true);
        }}
        onClose={() => setIsOpenModal(false)}
      />
      <DateTimePickerModal
        isVisible={isOpenDateModal}
        value={new Date()}
        dateMode="date"
        onChange={(newDate: Date) => {
          if (dateType === 'from') {
            setFromDate(newDate);
          } else {
            setToDate(newDate);
          }
        }}
        closeModal={() => setIsOpenDateModal(false)}
      />
    </Box>
  );
}
