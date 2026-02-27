import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import {
  COMPANY_TYPE,
  EDUCATION_TYPE,
  PARTY_MEMBER_TYPE,
  POLICY_TYPE,
  TALENT_TYPE,
} from '@/constants/value';
import MilitaryFilterBottomSheet from '@/features/military-number/MilitaryFilterBottomSheet';
import { RenderMilitaryItem } from '@/features/military-number/RenderMilitaryItem';
import { RenderMilitaryItemSkeleton } from '@/features/military-number/RenderMilitaryItemSkleton';
import { useGetCompanyList } from '@/hooks/useCompany';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

const LIMIT = 20;

type FilterType = {
  educations?: EDUCATION_TYPE[];
  companies?: COMPANY_TYPE[];
  partyMembers?: PARTY_MEMBER_TYPE[];
  policies?: POLICY_TYPE[];
  talents?: TALENT_TYPE[];
};

export default function MilitaryNumberScreen() {
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [filters, setFilters] = useState<string[]>([]);

  const handleOpenModal = () => {
    setIsOpenModal(true);
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
    filter: filters,
  });

console.log('ssss', data);


  const renderLoadingFooter = () =>
    isFetchingNextPage ? (
      <ActivityIndicator size={'small'} color={colors.primary[20]} />
    ) : null;

  const handlePressSearch = () => {
    router.push('/modal/military-number');
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader
        title="ĐIỂM DANH QUÂN SỐ"
        isSearch
        onPressSearch={handlePressSearch}
      />
      <FilterButton onOpenFilter={handleOpenModal} />
      {isLoading ? (
        Array.from({ length: 5 }, (_, index) => {
          return <RenderMilitaryItemSkeleton key={index} />;
        })
      ) : (
        <FlatList
          data={data || []}
          renderItem={({ item }) => <RenderMilitaryItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          onEndReachedThreshold={0.6}
          onEndReached={handleLoadMore}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderLoadingFooter}
          ListEmptyComponent={
            isEmpty ? (
              <EmptyScreen text="Chưa có dữ liệu điểm danh quân số" />
            ) : (
              <></>
            )
          }
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        />
      )}
      <MilitaryFilterBottomSheet
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onConfirm={setFilters}
      />
    </Box>
  );
}
