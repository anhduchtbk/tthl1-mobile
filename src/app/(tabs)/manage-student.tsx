import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderStudentItem } from '@/features/manage-student/manage/RenderStudentItem';
import { RenderStudentItemSkeleton } from '@/features/manage-student/manage/RenderStudentItemSkeleton';
import StudentFilterBottomSheet from '@/features/manage-student/manage/StudentFilterBottomSheet';
import { useGetStudentList } from '@/hooks/useStudent';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

const LIMIT = 20;

export default function ManageStudentScreen() {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);

  const {
    data,
    isLoadingFirstPage: isLoading,
    isRefetching,
    refetch,
    handleLoadMore,
    isFetchingNextPage,
  } = useGetStudentList({
    page: 1,
    limit: LIMIT,
    filter: filters,
  });

  const renderLoadingFooter = () =>
    isFetchingNextPage ? (
      <ActivityIndicator size={'small'} color={colors.primary[20]} />
    ) : (
      <Box h={200} />
    );

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleOpenSearch = () => {
    // setOpenSearch(true);
    router.push('/modal/student-search');
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader
        title="QUẢN LÝ HỌC VIÊN"
        isSearch
        onPressSearch={handleOpenSearch}
      />
      <FilterButton onOpenFilter={handleOpenModal} />
      {isLoading ? (
        Array.from({ length: 5 }, (_, index) => {
          return <RenderStudentItemSkeleton key={index} />;
        })
      ) : (
        <FlatList
          data={data || []}
          renderItem={({ item }) => <RenderStudentItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          onEndReachedThreshold={0.6}
          onEndReached={handleLoadMore}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyScreen text="Chưa có dữ liệu học viên" />}
          ListFooterComponent={renderLoadingFooter()}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        />
      )}
      <StudentFilterBottomSheet
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onConfirm={setFilters}
      />
    </Box>
  );
}
