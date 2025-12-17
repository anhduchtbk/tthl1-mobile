import SearchSvg from '@/assets/icons/search-svg';
import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderPersonelItem } from '@/features/military-number/RenderPersonelItem';
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
      <Box bgColor={colors.white} borderBottomWidth={1} borderColor={'#F5F5F5'}>
        <ScreenHeader
          title="ĐIỂM DANH QUÂN SỐ"
          RightComponent={<RightComponent />}
        />
      </Box>
      <FilterButton />
      <FlatList
        data={ListPersonels}
        renderItem={({ item }) => <RenderPersonelItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
      />
    </Box>
  );
}

const ListPersonels = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Đại đội 1 - VB2',
    noOfCommander: 4,
    noOfStudent: 107,
    commanderName: 'Đại úy Nguyen Van A',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Đại đội 3 - VB2',
    noOfCommander: 4,
    noOfStudent: 127,
    commanderName: 'Thiếu tá Nguyen Van B',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Đại đội 1 - Đại học',
    noOfCommander: 4,
    noOfStudent: 120,
    commanderName: 'Thượng úy Nguyen Van C',
  },
];
