import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderFacilityByUnitItem } from '@/features/home/facility/RenderFacilityByUnitItem';
import { colors } from '@/theme/colors';
import { FlatList } from 'react-native';

export default function ManageFacilityByUnitScreen() {
  return (
    <Box flex={1} bgColor={colors.white}>
      <Box
        bgColor={colors.white}
        borderBottomWidth={1}
        borderColor={'#F5F5F5'}
        mb={4}
      >
        <ScreenHeader title="QUẢN LÝ VẬT CHẤT" subTitle="TIỂU ĐOÀN 2" />
      </Box>
      <Box p={16}>
        <FilterButton />
      </Box>
      <FlatList
        data={ListSchedule}
        renderItem={({ item }) => <RenderFacilityByUnitItem item={item} />}
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
    facilityName: 'Súng tiểu liên AK-47',
    totalAmount: 110,
    leftAmount: 4,
    inChargeFullname: 'Nguyễn Văn A',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    facilityName: 'Đại đội 1 - VB2',
    totalAmount: 110,
    leftAmount: 4,
    inChargeFullname: 'Nguyễn Văn A',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    facilityName: 'Đại đội 1 - VB2',
    totalAmount: 110,
    leftAmount: 4,
    inChargeFullname: 'Nguyễn Văn A',
  },
];
