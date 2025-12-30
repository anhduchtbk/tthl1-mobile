import { Box } from '@/components/common/Layout/Box';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderFacilityByUnitItem } from '@/features/home/facility/RenderFacilityByUnitItem';
import { RenderFacilityByUnitItemSkeleton } from '@/features/home/facility/RenderFacilityByUnitItemSkeleton';
import { useGetInventoryListById } from '@/hooks/useInventory';
import { colors } from '@/theme/colors';
import { useSearchParams } from 'expo-router/build/hooks';
import { FlatList, RefreshControl } from 'react-native';

export default function ManageFacilityByUnitScreen() {
  const params = useSearchParams();
  const { data, isLoading, isRefetching, refetch } = useGetInventoryListById(
    Number(params.get('inventory_id'))
  );

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="QUẢN LÝ VẬT CHẤT" subTitle="TIỂU ĐOÀN 2" />
      <Box flex={1} mt={16}>
        {isLoading ? (
          Array.from({ length: 5 }, (_, index) => {
            return <RenderFacilityByUnitItemSkeleton key={index} />;
          })
        ) : (
          <FlatList
            data={data?.equipments || []}
            renderItem={({ item }) => <RenderFacilityByUnitItem item={item} />}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<Box h={100} />}
            ListEmptyComponent={<EmptyScreen text="Chưa có dữ liệu vật chất" />}
            refreshControl={
              <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
            }
          />
        )}
      </Box>
    </Box>
  );
}
