import SearchSvg from '@/assets/icons/search-svg';
import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderMilitaryItem } from '@/features/military-number/RenderMilitaryItem';
import { colors } from '@/theme/colors';
import { FlatList, TouchableOpacity } from 'react-native';

export default function MilitaryNumberScreen() {
  const RightComponent = () => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <SearchSvg />
      </TouchableOpacity>
    );
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <Box
        bgColor={colors.white}
        borderBottomWidth={1}
        borderColor={'#F5F5F5'}
        mb={4}
      >
        <ScreenHeader
          title="ĐIỂM DANH QUÂN SỐ"
          RightComponent={<RightComponent />}
        />
      </Box>
      <FilterButton />
      <FlatList
        data={ListSchedule}
        renderItem={({ item }) => <RenderMilitaryItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
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
