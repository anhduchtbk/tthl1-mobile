import { Company } from '@/api/types/company';
import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { DateTimePickerModal } from '@/components/common/Modal/DateTimePickerModal';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { HISTORY_TYPE } from '@/constants/value';
import {
  HistoryElement,
  TotalWeekElement,
} from '@/features/manage-student/history/HistoryElement';
import MilitaryHistoryFilterBottomSheet from '@/features/military-number/military-history-report/MilitaryHistoryFilterBottomSheet';
import { DayElementScrollView } from '@/features/schedule/DayElement';
import { colors } from '@/theme/colors';
import { useSearchParams } from 'expo-router/build/hooks';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

export type WeeklySummaryDay = {
  date: string; // yyyy-mm-dd
  label: string; // Thứ 2 (02/01/2025)
  total: number;
  absent: number;
  actual: number;
  groups?: {
    title: string; // Nhóm học viên 1
    reason: string;
    students: string[];
  }[];
};

export const weeklySummaryFakeData: WeeklySummaryDay[] = [
  {
    date: '2025-01-02',
    label: 'Thứ 2 (02/01/2025)',
    total: 110,
    absent: 4,
    actual: 106,
    groups: [
      {
        title: 'Nhóm học viên 1',
        reason: 'Nằm quân y (2 học viên)',
        students: ['Nguyễn Văn A', 'Nguyễn Văn B'],
      },
      {
        title: 'Nhóm học viên 2',
        reason: 'Nghỉ tranh thủ (2 học viên)',
        students: ['Nguyễn Văn C', 'Nguyễn Văn D'],
      },
    ],
  },
  {
    date: '2025-01-03',
    label: 'Thứ 3 (03/01/2025)',
    total: 110,
    absent: 0,
    actual: 110,
  },
  {
    date: '2025-01-04',
    label: 'Thứ 4 (04/01/2025)',
    total: 110,
    absent: 4,
    actual: 106,
    groups: [
      {
        title: 'Nhóm học viên 1',
        reason: 'Nằm quân y (2 học viên)',
        students: ['Nguyễn Văn A', 'Nguyễn Văn B'],
      },
      {
        title: 'Nhóm học viên 2',
        reason: 'Nghỉ tranh thủ (2 học viên)',
        students: ['Nguyễn Văn C', 'Nguyễn Văn D'],
      },
    ],
  },
];

function DailyDetail({ data }: { data: any[] }) {
  return (
    <Box gap={16}>
      {data.map((item, idx) => (
        <HistoryElement key={idx} item={item} />
      ))}
    </Box>
  );
}

function WeeklySummary({ data }: { data: any[] }) {
  return (
    <Box gap={16}>
      {data.map(day => (
        <Box key={day.date} gap={16}>
          <Box alignSelf="flex-start">
            <Text
              fontSize={16}
              color={colors.primary[20]}
              style={{ paddingHorizontal: 8 }}
            >
              {day.label}
            </Text>

            <Box
              height={2}
              backgroundColor={colors.primary[20]}
              mt={6}
              mx={2}
            />
          </Box>

          <TotalWeekElement item={day} />
        </Box>
      ))}
    </Box>
  );
}

export default function MilitaryNumberScreen() {
  const searchParams = useSearchParams();
  const companyItem = JSON.parse(
    searchParams.get('companyItem') || ''
  ) as Company;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDateModal, setIsOpenDateModal] = useState(false);

  const [dateType, setDateType] = useState<'from' | 'to'>('from');
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.white }}
      edges={['top']}
    >
      <ScreenHeader
        title="LỊCH SỬ BÁO QUÂN SỐ"
        subTitle={`ĐẠI ĐỘI ${companyItem.name} - `}
        marginTop={4}
      />
      <FilterButton onOpenFilter={() => setIsOpenModal(true)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box px={16} gap={16}>
          <DayElementScrollView onChange={setSelectedIndex} />
          <Box gap={12}>
            {selectedIndex === 0 ? (
              <WeeklySummary data={weeklySummaryFakeData} />
            ) : (
              <DailyDetail data={fakeData} />
            )}
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
    </SafeAreaView>
  );
}
