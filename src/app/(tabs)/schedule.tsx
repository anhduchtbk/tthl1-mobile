import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderScheduleItem } from '@/features/schedule/RenderScheduleItem';
import { RenderScheduleItemSkeleton } from '@/features/schedule/RenderScheduleItemSkeleton';
import ScheduleFilterBottomSheet from '@/features/schedule/ScheduleFilterBottomSheet';
import { useGetCompanyList } from '@/hooks/useCompany';
import { colors } from '@/theme/colors';
import { useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

const LIMIT = 20;

export default function ScheduleScreen() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    data,
    isLoadingFirstPage: isLoading,
    isRefetching,
    refetch,
    handleLoadMore,
    isFetchingNextPage,
    isEmpty,
  } = useGetCompanyList({
    page: 1,
    limit: LIMIT,
  });

  const renderLoadingFooter = () =>
    isFetchingNextPage ? (
      <ActivityIndicator size={'small'} color={colors.primary[50]} />
    ) : null;

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="THỜI KHOÁ BIỂU" isSearch />
      <FilterButton onOpenFilter={() => setIsOpenModal(true)} />
      {isLoading ? (
        Array.from({ length: 5 }, (_, index) => {
          return <RenderScheduleItemSkeleton key={index} />;
        })
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <RenderScheduleItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          onEndReachedThreshold={0.6}
          onEndReached={handleLoadMore}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderLoadingFooter}
          ListEmptyComponent={
            isEmpty ? (
              <EmptyScreen text="Chưa có dữ liệu thời khoá biểu" />
            ) : (
              <></>
            )
          }
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        />
      )}
      <ScheduleFilterBottomSheet
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </Box>
  );
}
