import FilterSvg from '@/assets/icons/filter-svg';
import SearchSvg from '@/assets/icons/search-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderStudentItem } from '@/features/manage-student/manage/RenderStudentItem';
import { colors } from '@/theme/colors';
import { FlatList, TouchableOpacity } from 'react-native';

export default function ManageStudentScreen() {
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
          title="QUẢN LÝ HỌC VIÊN"
          RightComponent={<RightComponent />}
        />
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        gap={8}
        paddingLeft={16}
        mt={20}
      >
        <Text>Bộ lọc</Text>
        <FilterSvg />
      </Box>
      <FlatList
        data={ListStudents}
        renderItem={({ item }) => <RenderStudentItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
      />
    </Box>
  );
}

const ListStudents = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Nguyễn Văn A - TO1',
    dob: '01/01/2000',
    isPartyMember: true, // dang vien
    division: 'A1B1C1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Nguyễn Thu A - TO1',
    dob: '01/01/2000',
    isPartyMember: true, // dang vien
    division: 'A5B2C3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Nguyễn Văn B - TO1',
    dob: '01/01/2001',
    isPartyMember: false, // dang vien
    division: 'A4B2C2',
  },
];
