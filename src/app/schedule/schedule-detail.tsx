import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { ScheduleDetail } from '@/features/schedule/ScheduleDetail';
import { colors } from '@/theme/colors';
import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScheduleDetailScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.white }}
      edges={['top']}
    >
      <ScreenHeader title="THỜI KHOÁ BIỂU" isSearch marginTop={4} />
      <FilterButton />
      <FlatList
        data={[1, 2]}
        renderItem={({ item }) => <ScheduleDetail />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ListFooterComponent={<Box h={100} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
