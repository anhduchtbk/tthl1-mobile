import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderFacilityItem } from '@/features/home/facility/RenderFacilityItem';
import { useGetInventoryList } from '@/hooks/useInventory';
import { colors } from '@/theme/colors';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

const LIMIT = 10;

export default function ManageFacilityScreen() {
  const {
    data,
    isLoadingFirstPage: isLoading,
    isRefetching,
    refetch,
    handleLoadMore,
    isFetchingNextPage,
    isEmpty,
  } = useGetInventoryList({
    page: 1,
    limit: LIMIT,
  });

  const renderLoadingFooter = () =>
    isFetchingNextPage ? (
      <ActivityIndicator size={'small'} color={colors.primary[50]} />
    ) : null;

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="QUẢN LÝ VẬT CHẤT" isSearch />
      <FilterButton />
      <Box flex={1}>
        <FlatList
          data={data || []}
          renderItem={({ item }) => <RenderFacilityItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
          onEndReachedThreshold={0.6}
          onEndReached={handleLoadMore}
          ListFooterComponent={renderLoadingFooter}
        />
      </Box>
    </Box>
  );
}
