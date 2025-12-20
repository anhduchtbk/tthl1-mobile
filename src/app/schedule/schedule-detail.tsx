import SearchSvg from '@/assets/icons/search-svg';
import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { ScheduleDetail } from '@/features/schedule/ScheduleDetail';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

export default function ScheduleDetailScreen() {
  const RightComponent = () => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <SearchSvg />
      </TouchableOpacity>
    );
  };

  return (
    <Box>
      <ScrollView>
        <ScreenHeader
          title="THỜI KHOÁ BIỂU"
          RightComponent={<RightComponent />}
        />
        <Box px={16} gap={16}>
          <FilterButton />
          <ScheduleDetail />
          <ScheduleDetail />
        </Box>
      </ScrollView>
    </Box>
  );
}
