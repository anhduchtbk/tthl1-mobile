import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import NotificationFilterBottomSheet from '@/features/home/notification/NotificationFilterBottomSheet';
import { RenderNotificationItem } from '@/features/home/notification/RenderNotificationItem';
import { RenderNotificationItemSkeleton } from '@/features/home/notification/RenderNotificationItemSkeleton';
import { useGetTransactionPending } from '@/hooks/useTransaction';
import { formatNotificationAmount } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native';

const typeList = [
  { id: 1, type: 'all', name: 'Tất cả' },
  // { id: 2, type: 'company', name: 'Đơn vị' },
  // { id: 3, type: 'is_pending', name: 'Chờ duyệt' },
  // { id: 4, type: 'done', name: 'Đã duyệt' },
];

const LIMIT = 20;

export default function NotificationScreen() {
  const isFocused = useIsFocused();
  const [typeIndex, setTypeIndex] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {
    data,
    isLoadingFirstPage: isLoading,
    isRefetching,
    refetch,
    handleLoadMore,
    isFetchingNextPage,
    isEmpty,
  } = useGetTransactionPending({
    page: 1,
    limit: LIMIT,
  });

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused]);

  const renderLoadingFooter = () =>
    isFetchingNextPage ? (
      <ActivityIndicator size={'small'} color={colors.primary[20]} />
    ) : null;

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="THÔNG BÁO" />
      {/* <FilterButton onOpenFilter={() => setIsOpenModal(true)} /> */}
      <Box px={16} my={16}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {typeList.map((item, index) => {
            return (
              <Box
                key={index}
                alignSelf="flex-start"
                py={8}
                px={16}
                borderBottomWidth={1}
                borderBottomColor={
                  item.id === typeIndex ? colors.primary[20] : '#F1F1F1'
                }
                onPress={() => setTypeIndex(item.id)}
              >
                <Text
                  key={index}
                  fontSize={FontSize.LARGE}
                  color={item.id === typeIndex ? colors.primary[20] : '#515151'}
                >
                  {item.name}
                </Text>
                <Box
                  w={18}
                  h={18}
                  borderRadius={18}
                  pos="absolute"
                  top={0}
                  right={0}
                  bgColor={'#D81B19'}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize={10} color={colors.white} fontWeight="bold">
                    {formatNotificationAmount(data?.length || 0)}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </ScrollView>
      </Box>
      {isLoading ? (
        Array.from({ length: 5 }, (_, index) => {
          return <RenderNotificationItemSkeleton key={index} />;
        })
      ) : (
        <FlatList
          data={data || []}
          renderItem={({ item }) => <RenderNotificationItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          onEndReachedThreshold={0.6}
          onEndReached={handleLoadMore}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderLoadingFooter}
          ListEmptyComponent={
            isEmpty ? <EmptyScreen text="Chưa có dữ liệu thông báo" /> : <></>
          }
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
          }
        />
      )}
      <NotificationFilterBottomSheet
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </Box>
  );
}
