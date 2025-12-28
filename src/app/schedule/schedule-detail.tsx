import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { ScheduleDetail } from '@/features/schedule/ScheduleDetail';
import { colors } from '@/theme/colors';
import React from 'react';
import { FlatList } from 'react-native';

export default function ScheduleDetailScreen() {
  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="THỜI KHOÁ BIỂU" isSearch />
      <FilterButton />
      <FlatList
        data={[1, 2]}
        renderItem={({ item }) => <ScheduleDetail />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ListFooterComponent={<Box h={100} />}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}
