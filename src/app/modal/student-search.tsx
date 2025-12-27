import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import TextField from '@/components/common/TextField/TextField';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ModalHeader } from '@/components/header/ModalHeader';
import { RenderStudentItem } from '@/features/manage-student/manage/RenderStudentItem';
import { RenderStudentItemSkeleton } from '@/features/manage-student/manage/RenderStudentItemSkeleton';
import { useGetStudentList } from '@/hooks/useStudent';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';

const LIMIT = 20;

export interface StudentSearchProps {
  onSelect: () => void;
}

const StudentSearch: React.FC<StudentSearchProps> = () => {
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
  } = useGetStudentList({
    page: 1,
    limit: LIMIT,
    search: keyword,
  });

  const renderLoadingFooter = () =>
    isFetchingNextPage ? (
      <ActivityIndicator size={'small'} color={colors.primary[50]} />
    ) : null;

  const handleOnChangeSearch = (value: string) => {
    setKeyword(value);
  };

  return (
    <Box bgColor={colors.white} flex={1} justifyContent="space-between">
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
        <Text>Kết quả tìm kiếm ({totalCount})</Text>
      </Box>
      <Box flex={1}>
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
            ListEmptyComponent={<EmptyScreen />}
            ListFooterComponent={renderLoadingFooter()}
            refreshControl={
              <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
            }
          />
        )}
      </Box>
    </Box>
  );
};

export default StudentSearch;
