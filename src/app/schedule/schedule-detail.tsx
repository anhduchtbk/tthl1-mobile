import { Company } from '@/api/types/company';
import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { DateTimePickerModal } from '@/components/common/Modal/DateTimePickerModal';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import MilitaryHistoryFilterBottomSheet from '@/features/military-number/military-history-report/MilitaryHistoryFilterBottomSheet';
import { ScheduleDetail } from '@/features/schedule/ScheduleDetail';
import { useGetTimetableByCompanyList } from '@/hooks/useTimetable';
import { formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
import dayjs from 'dayjs';
import { useSearchParams } from 'expo-router/build/hooks';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScheduleDetailScreen() {
  const searchParams = useSearchParams();
  const companyItem = JSON.parse(
    searchParams.get('companyItem') || ''
  ) as Company;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDateModal, setIsOpenDateModal] = useState(false);

  const [dateType, setDateType] = useState<'from' | 'to'>('from');
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const { data, isLoading } = useGetTimetableByCompanyList({
    companyId: companyItem?.id,
    fromDate: fromDate ? dayjs(fromDate).format('YYYY-MM-DD') : '',
    toDate: toDate ? dayjs(toDate).format('YYYY-MM-DD') : '',
  });

  const reversedData = React.useMemo(
    () => formatByWeek(data || []).reverse(),
    [data]
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.white }}
      edges={['top']}
    >
      <ScreenHeader
        title="THỜI KHOÁ BIỂU"
        subTitle={`ĐẠI ĐỘI ${companyItem.name} - ${formatEducation(
          companyItem?.course?.type
        )}`}
        marginTop={4}
      />

      <FilterButton onOpenFilter={() => setIsOpenModal(true)} />
      {isLoading ? (
        <Box mt={100}>
          <ActivityIndicator color={colors.primary[20]} />
        </Box>
      ) : (
        <FlatList
          data={reversedData}
          renderItem={({ item }) => (
            <ScheduleDetail item={item} companyItem={companyItem} />
          )}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          ListFooterComponent={<Box h={100} />}
          showsVerticalScrollIndicator={false}
        />
      )}
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

type WeekGroup = {
  weekIndex: number;
  startOfWeek: string; // YYYY-MM-DD (Monday)
  days: {
    date: string; // YYYY-MM-DD
    items: any[];
  }[];
};

type Item = {
  date: string; // YYYY-MM-DD
  [key: string]: any;
};

function formatByWeek(items: Item[]): WeekGroup[] {
  const weekMap = new Map<string, WeekGroup>();

  items.forEach(item => {
    const date = new Date(item.date);
    const day = date.getDay(); // 0 (Sun) - 6 (Sat)

    // Calculate Monday of the week
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(date);
    monday.setDate(date.getDate() + diff);

    const mondayKey = monday.toISOString().split('T')[0];

    // Create week if not exists
    if (!weekMap.has(mondayKey)) {
      const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        return {
          date: d.toISOString().split('T')[0],
          items: [],
        };
      });

      weekMap.set(mondayKey, {
        weekIndex: weekMap.size + 1,
        startOfWeek: mondayKey,
        days,
      });
    }

    // Push item into correct day
    const week = weekMap.get(mondayKey)!;
    const dayEntry = week.days.find(d => d.date === item.date);
    if (dayEntry) {
      dayEntry.items.push(item);
    }
  });

  return Array.from(weekMap.values());
}
