import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderStudentItem } from '@/features/manage-student/manage/RenderStudentItem';
import StudentFilterBottomSheet from '@/features/manage-student/manage/StudentFilterBottomSheet';
import { useGetStudentList } from '@/hooks/useStudent';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

const LIMIT = 20;

export default function ManageStudentScreen() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSearch, setOpenSearch] = useState(false);
  const [filters, setFilters] = useState<{
    countries?: string[];
    years?: string[];
    category?: string;
    sortType: 'rating' | 'a-z';
  }>({
    countries: [],
    years: [],
    sortType: 'rating',
    category: '',
  });
  const router = useRouter();

  const {
    data,
    isLoadingFirstPage: isLoading,
    isRefetching,
    refetch,
    handleLoadMore,
    isFetchingNextPage,
    isEmpty,
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

      <FlatList
        data={data || []}
        renderItem={({ item }) => <RenderStudentItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ListFooterComponent={renderLoadingFooter()}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        onEndReachedThreshold={0.6}
        onEndReached={handleLoadMore}
        showsVerticalScrollIndicator={false}
      />

      <StudentFilterBottomSheet
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onSelect={handleOpenModal}
        selectedYears={filters.years}
      />
      {/* <StudentSearchModal
        isOpen={isOpenSearch}
        onClose={() => setOpenSearch(false)}
        onSelect={handleOpenSearch}
      /> */}
    </Box>
  );
}
