import { Company } from '@/api/types/company';
import { Student } from '@/api/types/student';
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
import { formatEducation, getWeekNumberByCourse } from '@/lib/utils';
import { colors } from '@/theme/colors';
import dayjs from 'dayjs';
import { useRouter, useSearchParams } from 'expo-router/build/hooks';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LIMIT = 20;

export default function MilitaryNumberScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const companyItem = JSON.parse(
    searchParams.get('companyItem') || ''
  ) as Company;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDateModal, setIsOpenDateModal] = useState(false);

  const [dateType, setDateType] = useState<'from' | 'to'>('from');
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState('all');

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
        onBackPress={() => router.replace('/(tabs)/military-number')}
      />
      {/* <FilterButton onOpenFilter={() => setIsOpenModal(true)} /> */}
      <Box px={16} mt={8} mb={16}>
        <DayElementScrollView
          week={getWeekNumberByCourse(
            data?.[0]?.company?.course?.startDate,
            data?.[0]?.reportTime
          )}
          fromDate={fromTime}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Box>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Box px={16} gap={12}>
          {selectedDate === 'all' ? (
            <WeeklySummary data={formatWeeklySummary(data)} />
          ) : (
            <DailyDetail
              data={formatReportList(data).filter(
                item => item.reportTime === selectedDate
              )}
            />
          )}
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
      {data.map((day, index) => (
        <Box key={index} gap={16}>
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

export interface WeeklySummaryGroup {
  title: string;
  reason: string;
  students: Student[];
}

export interface WeeklySummaryDay {
  date: string;
  label: string;
  total: number;
  absent: number;
  actual: number;
  groups?: WeeklySummaryGroup[];
}

function formatVietnameseLabel(dateStr: string): string {
  const date = new Date(dateStr);

  const dayMap = [
    'Chủ nhật',
    'Thứ 2',
    'Thứ 3',
    'Thứ 4',
    'Thứ 5',
    'Thứ 6',
    'Thứ 7',
  ];

  const dayName = dayMap[date.getDay()];
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return `${dayName} (${dd}/${mm}/${yyyy})`;
}

export function formatWeeklySummary(apiData: any[]): WeeklySummaryDay[] {
  const dayMap: Record<
    string,
    {
      date: string;
      label: string;
      total: number;
      studentMap: Map<number, Student>;
      reasonMap: Map<string, Map<number, Student>>;
    }
  > = {};

  apiData.forEach(item => {
    const date = item.reportTime.split('T')[0];

    if (!dayMap[date]) {
      dayMap[date] = {
        date,
        label: formatVietnameseLabel(item.reportTime),
        total: item.personnelCount,
        studentMap: new Map(),
        reasonMap: new Map(),
      };
    }

    item.attendanceRecords?.forEach((record: any) => {
      const student = record.student;
      if (!student?.id || !student?.fullName) return;

      const reason = record.reason || 'Không rõ lý do';

      // chống trùng học viên trong ngày
      dayMap[date].studentMap.set(student.id, student);

      // group theo reason
      if (!dayMap[date].reasonMap.has(reason)) {
        dayMap[date].reasonMap.set(reason, new Map());
      }

      dayMap[date].reasonMap.get(reason)!.set(student.id, student);
    });
  });

  return Object.values(dayMap).map(day => {
    const absent = day.studentMap.size;
    const actual = day.total - absent;

    const groups =
      absent > 0
        ? Array.from(day.reasonMap.entries()).map(
            ([reason, studentMap], index) => ({
              title: `Nhóm học viên ${index + 1}`,
              reason: `${reason} (${studentMap.size} học viên)`,
              students: Array.from(studentMap.values()),
            })
          )
        : undefined;

    return {
      date: day.date,
      label: day.label,
      total: day.total,
      absent,
      actual,
      ...(groups ? { groups } : {}),
    };
  });
}

export interface AbsentStudent {
  id: number;
  name: string;
}

export interface StudentGroupItem {
  reasonAbsent: string;
  absentStudents: AbsentStudent[];
  totalStudents: number;
}

export const formatReportList = (attendanceList: any[]) => {
  return attendanceList.map(item => {
    const reasonMap: Record<string, AbsentStudent[]> = {};

    // Group students by reason
    item.attendanceRecords?.forEach((record: any) => {
      const reason = record.reason || 'Không rõ lý do';
      const student = record.student;

      if (!student?.id || !student?.fullName) return;

      if (!reasonMap[reason]) {
        reasonMap[reason] = [];
      }

      // tránh trùng học viên trong cùng reason
      const exists = reasonMap[reason].some(s => s.id === student.id);

      if (!exists) {
        reasonMap[reason].push(student);
      }
    });

    const listStudentGroup: StudentGroupItem[] = Object.entries(reasonMap).map(
      ([reason, students]) => ({
        reasonAbsent: reason,
        absentStudents: students,
        totalStudents: item.personnelCount,
      })
    );

    const totalAbsent = listStudentGroup.reduce(
      (sum, group) => sum + group.absentStudents.length,
      0
    );

    return {
      id: item.id,
      reportTime: item.reportTime.split('T')[0],
      absentStudents: totalAbsent,
      actualStudents: item.personnelCount - totalAbsent,
      totalStudents: item.personnelCount,
      type: item.session, // morning | afternoon
      listStudentGroup,
    };
  });
};
