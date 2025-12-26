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
  });

  const renderLoadingFooter = () =>
    isFetchingNextPage ? (
      <ActivityIndicator color={colors.primary[50]} />
    ) : null;

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleOpenSearch = () => {
    // setOpenSearch(true);
    router.push('/modal/student-search');
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <Box bgColor={colors.white} mb={4}>
        <ScreenHeader
          title="QUẢN LÝ HỌC VIÊN"
          isSearch
          onPressSearch={handleOpenSearch}
        />
      </Box>

      <Box p={16}>
        <FilterButton onOpenFilter={handleOpenModal} />
      </Box>
      {isLoading ? (
        [1, 2, 3, 4, 5].map((_, index) => {
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
          ListEmptyComponent={<EmptyScreen text="Chưa có học viên" />}
          ListFooterComponent={renderLoadingFooter()}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        />
      )}

      <StudentFilterBottomSheet
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </Box>
  );
}
