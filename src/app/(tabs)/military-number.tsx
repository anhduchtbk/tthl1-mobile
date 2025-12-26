import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import MilitaryFilterModal from '@/features/military-number/MilitaryFilterModal';
import { RenderMilitaryItem } from '@/features/military-number/RenderMilitaryItem';
import { RenderMilitaryItemSkeleton } from '@/features/military-number/RenderMilitaryItemSkleton';
import { useGetCompanyList } from '@/hooks/useCompany';
import { colors } from '@/theme/colors';
import { useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

const LIMIT = 10;

export default function MilitaryNumberScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

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
      <ActivityIndicator color={colors.primary[50]} />
    ) : null;

  return (
    <Box flex={1} bgColor={colors.white}>
      <Box
        bgColor={colors.white}
        borderBottomWidth={1}
        borderColor={'#F5F5F5'}
        mb={4}
      >
        <ScreenHeader title="ĐIỂM DANH QUÂN SỐ" isSearch />
      </Box>
      <Box px={16}>
        <FilterButton onOpenFilter={handleOpenModal} />
      </Box>
      {isLoading ? (
        [1, 2, 3, 4, 5].map((_, index) => {
          return <RenderMilitaryItemSkeleton key={index} />;
        })
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <RenderMilitaryItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          onEndReachedThreshold={0.6}
          onEndReached={handleLoadMore}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderLoadingFooter}
          ListEmptyComponent={<EmptyScreen text="Chưa có dữ liệu quân số" />}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        />
      )}

      <MilitaryFilterModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelect={handleOpenModal}
      />
    </Box>
  );
}

const ListSchedule = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    companyFullname: 'Đại đội 1 - VB2',
    companyAmount: 110,
    commanderAmount: 4,
    commanderFullname: 'Nguyễn Văn A',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    companyFullname: 'Đại đội 1 - VB2',
    companyAmount: 110,
    commanderAmount: 4,
    commanderFullname: 'Nguyễn Văn A',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    companyFullname: 'Đại đội 1 - VB2',
    companyAmount: 110,
    commanderAmount: 4,
    commanderFullname: 'Nguyễn Văn A',
  },
];
