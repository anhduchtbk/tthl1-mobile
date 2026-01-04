import { Company } from '@/api/types/company';
import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { DateTimePickerModal } from '@/components/common/Modal/DateTimePickerModal';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import {
  HistoryElement,
  TotalWeekElement,
} from '@/features/manage-student/history/HistoryElement';
import MilitaryHistoryFilterBottomSheet from '@/features/military-number/military-history-report/MilitaryHistoryFilterBottomSheet';
import { DayElementScrollView } from '@/features/schedule/DayElement';
import { useGetAttendanceReportList } from '@/hooks/useAttendanceReport';
import { formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
import dayjs from 'dayjs';
import { useSearchParams } from 'expo-router/build/hooks';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LIMIT = 20;

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

  const fromTime = dayjs().startOf('week').add(1, 'day').format('YYYY-MM-DD');
  const toTime = dayjs().endOf('week').add(1, 'day').format('YYYY-MM-DD');

  const { data } = useGetAttendanceReportList({
    page: 1,
    limit: LIMIT,
    filter: [
      `company.id|$eq|${companyItem?.id}`,
      `reportTime|$gt|${fromTime}`,
      `reportTime|$lt|${toTime}`,
    ],
  });

  const formatData = (attendanceList: any[]) => {
    return attendanceList.map(item => {
      return {
        id: 1,
        type: item.session,
        totalStudents: item.personnelCount,
        absentStudents: item.totalAbsent,
        actualStudents: item.personnelCount - item.totalAbsent,
        listStudentGroup: groupByReason(item.attendanceRecords),
      };
    });
  };

  console.log('aaaaa', formatData(data));

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.white }}
      edges={['top']}
    >
      <ScreenHeader
        title="LỊCH SỬ BÁO QUÂN SỐ"
        subTitle={`ĐẠI ĐỘI ${companyItem.name} - ${formatEducation(
          companyItem?.course?.type
        )}`}
        marginTop={4}
      />
      <FilterButton onOpenFilter={() => setIsOpenModal(true)} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Box px={16} gap={16}>
          <DayElementScrollView onChange={setSelectedIndex} />
          <Box gap={12}>
            {selectedIndex === 0 ? (
              <WeeklySummary data={weeklySummaryFakeData} />
            ) : (
              <DailyDetail data={formatData(data)} />
            )}
          </Box>
        </Box>
        <Box h={100} />
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
        value={
          dateType === 'from' && fromDate
            ? fromDate
            : dateType === 'to' && toDate
            ? toDate
            : new Date()
        }
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

type AbsentItem = {
  reason: string;
  student: {
    fullName: string;
  };
};

function groupByReason(data: AbsentItem[]) {
  const map = new Map<string, string[]>();

  data.forEach(item => {
    const reason = item.reason;
    const studentName = item.student.fullName;

    if (!map.has(reason)) {
      map.set(reason, []);
    }

    map.get(reason)!.push(studentName);
  });

  return Array.from(map.entries()).map(([reason, students]) => ({
    reasonAbsent: reason,
    absentStudents: students,
  }));
}
