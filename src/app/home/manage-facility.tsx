import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderFacilityItem } from '@/features/home/facility/RenderFacilityItem';
import { colors } from '@/theme/colors';
import { FlatList } from 'react-native';

export default function ManageFacilityScreen() {
  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="QUẢN LÝ VẬT CHẤT" isSearch />
      <FilterButton />
      <FlatList
        data={ListSchedule}
        renderItem={({ item }) => <RenderFacilityItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
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
