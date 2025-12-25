import SearchSvg from '@/assets/icons/search-svg';
import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { ScheduleDetail } from '@/features/schedule/ScheduleDetail';
import { colors } from '@/theme/colors';
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
    <Box bgColor={colors.white}>
      <ScreenHeader
        title="THỜI KHOÁ BIỂU"
        RightComponent={<RightComponent />}
      />
      <ScrollView>
        <Box px={16} gap={16}>
          <FilterButton />
          <ScheduleDetail />
          <ScheduleDetail />
        </Box>
      </ScrollView>
    </Box>
  );
}
