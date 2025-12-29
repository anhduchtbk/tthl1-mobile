import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderFacilityByUnitItem } from '@/features/home/facility/RenderFacilityByUnitItem';
import { useGetInventoryListById } from '@/hooks/useInventory';
import { colors } from '@/theme/colors';
import { useSearchParams } from 'expo-router/build/hooks';
import { FlatList } from 'react-native';

export default function ManageFacilityByUnitScreen() {
  const params = useSearchParams();
  const { data } = useGetInventoryListById(Number(params.get('inventory_id')));

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="QUẢN LÝ VẬT CHẤT" subTitle="TIỂU ĐOÀN 2" />
      <Box flex={1} mt={16}>
        <FlatList
          data={data?.equipments || []}
          renderItem={({ item }) => <RenderFacilityByUnitItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </Box>
  );
}
