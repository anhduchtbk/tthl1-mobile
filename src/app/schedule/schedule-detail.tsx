import SearchSvg from '@/assets/icons/search-svg';
import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { ScheduleDetail } from '@/features/schedule/ScheduleDetail';
import { colors } from '@/theme/colors';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

export default function ScheduleDetailScreen() {
  const RightComponent = () => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <SearchSvg />
      </TouchableOpacity>
    );
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <Box
        bgColor={colors.white}
        borderBottomWidth={1}
        borderColor={'#F5F5F5'}
        mb={4}
      >
        <ScreenHeader title="THỜI KHOÁ BIỂU" isSearch />
      </Box>
      <Box p={16}>
        <FilterButton />
      </Box>
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
