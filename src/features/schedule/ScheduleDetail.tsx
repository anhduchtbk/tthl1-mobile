import { Company } from '@/api/types/company';
import { Timetable } from '@/api/types/timetable';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { DayHeaderScrollView } from './DayHeader';
import { ScheduleItem } from './ScheduleItem';

type ScheduleDetailProps = {
  item: {
    weekIndex: number;
    startOfWeek: string;
    days: {
      date: string;
      items: Timetable[];
    }[];
  };
  companyItem?: Company;
  isHome?: boolean;
};

export function ScheduleDetail({
  item,
  companyItem,
  isHome,
}: ScheduleDetailProps) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string>(
    item?.days[0]?.date || ''
  );

  return (
    <Box style={styles.timetable}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize={isHome ? 20 : 15} fontWeight="bold" color={'#333'}>
          Thời khoá biểu (C
          {companyItem?.name ||
            item?.days?.[0]?.items?.[0]?.company?.name} -{' '}
          {formatEducation(
            companyItem?.course?.type ||
              item?.days?.[0]?.items?.[0]?.company?.course?.type
          )}
          )
        </Text>
        {!isHome && (
          <Text fontSize={12} color={colors.primary[20]}>
            Tuần {item?.weekIndex}
          </Text>
        )}
      </Box>
      <DayHeaderScrollView
        startOfWeek={item?.startOfWeek}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Box gap={8}>
        {(() => {
          const selectedDay = item?.days.find(day => day.date === selectedDate);
          return selectedDay?.items && selectedDay.items.length > 0 ? (
            selectedDay.items.map((timetable, index) => {
              return <ScheduleItem item={timetable} key={index} />;
            })
          ) : (
            // <EmptyScreen text="Chưa có dữ liệu thời khoá biểu" />
            <></>
          );
        })()}
      </Box>
      {isHome && (
        <Box
          h={40}
          borderRadius={8}
          alignItems="center"
          justifyContent="center"
          bgColor={colors.primary[40]}
          borderWidth={1}
          borderColor={colors.primary[30]}
          onPress={() => router.push('/schedule')}
        >
          <Text fontWeight="semibold" color={colors.primary[10]}>
            Xem chi tiết
          </Text>
        </Box>
      )}
    </Box>
  );
}

const styles = StyleSheet.create({
  timetable: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    paddingTop: 20,
    borderRadius: 16,
    gap: 20,
    marginBottom: 16,

    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
});
