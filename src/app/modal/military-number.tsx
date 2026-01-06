import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import TextField from '@/components/common/TextField/TextField';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ModalHeader } from '@/components/header/ModalHeader';
import { RenderMilitaryItem } from '@/features/military-number/RenderMilitaryItem';
import { RenderMilitaryItemSkeleton } from '@/features/military-number/RenderMilitaryItemSkleton';
import { useGetCompanyList } from '@/hooks/useCompany';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LIMIT = 20;

export interface CompanySearchProps {
  onSelect: () => void;
}

const CompanySearch: React.FC<CompanySearchProps> = () => {
  const router = useRouter();

  const [keyword, setKeyword] = useState<string>();

  const onClose = () => {
    router.back();
  };

  const {
    data,
    isLoadingFirstPage: isLoading,
    isRefetching,
    refetch,
    handleLoadMore,
    isFetchingNextPage,
    totalCount,
    isEmpty,
  } = useGetCompanyList({
    page: 1,
    limit: LIMIT,
    search: keyword,
  });

  const renderLoadingFooter = () =>
    isFetchingNextPage ? (
      <ActivityIndicator size={'small'} color={colors.primary[20]} />
    ) : null;

  const handleOnChangeSearch = (value: string) => {
    setKeyword(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Box p={16} pb={0}>
        <ModalHeader title="Tìm kiếm" onClose={onClose} />
      </Box>
      <Box gap={12} px={16} mb={4}>
        <TextField
          label={'Tìm kiếm'}
          placeholder="Nhập thông tin tìm kiếm"
          onChange={value => {
            handleOnChangeSearch(value);
          }}
        />
        <Text color={colors.text[2]}>Kết quả tìm kiếm ({totalCount})</Text>
      </Box>
      <Box flex={1}>
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
            ListEmptyComponent={
              isEmpty ? (
                <EmptyScreen text="Không có kết quả phù hợp, vui lòng thử lại" />
              ) : (
                <></>
              )
            }
            ListFooterComponent={renderLoadingFooter()}
            refreshControl={
              <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
            }
          />
        )}
      </Box>
    </SafeAreaView>
  );
};

export default CompanySearch;
