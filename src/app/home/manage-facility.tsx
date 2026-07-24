import { Box } from '@/components/common/Layout/Box';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderFacilityItem } from '@/features/home/facility/RenderFacilityItem';
import { RenderFacilityItemSkeleton } from '@/features/home/facility/RenderFacilityItemSkeleton';
import { useGetInventoryList } from '@/hooks/useInventory';
import { useAuthStore } from '@/store/authStore';
import { colors } from '@/theme/colors';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

const LIMIT = 10;

export default function ManageFacilityScreen() {
  const { user } = useAuthStore();

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

  const companyData = user?.company
    ? [
        ...(data || []),
        { id: user?.company?.id, name: `Đại đội ${user?.company?.name}` },
      ]
    : data;

  const renderLoadingFooter = () =>
    isFetchingNextPage ? (
      <ActivityIndicator size={'small'} color={colors.primary[20]} />
    ) : null;

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="QUẢN LÝ VẬT CHẤT" />
      {/* <FilterButton /> */}
      <Box h={16} />
      {isLoading ? (
        Array.from({ length: 5 }, (_, index) => {
          return <RenderFacilityItemSkeleton key={index} />;
        })
      ) : (
        <FlatList
          data={companyData || []}
          renderItem={({ item }) => <RenderFacilityItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          onEndReachedThreshold={0.6}
          onEndReached={handleLoadMore}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            isEmpty ? <EmptyScreen text="Chưa có dữ liệu vật chất" /> : <></>
          }
          ListFooterComponent={renderLoadingFooter()}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        />
      )}
    </Box>
  );
}
