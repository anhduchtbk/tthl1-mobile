import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderStudentItem } from '@/features/manage-student/manage/RenderStudentItem';
import StudentFilterBottomSheet from '@/features/manage-student/manage/StudentFilterBottomSheet';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList } from 'react-native';

export default function ManageStudentScreen() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSearch, setOpenSearch] = useState(false);
  const [filters, setFilters] = useState<{
    countries?: string[];
    years?: string[];
    category?: string;
    sortType: 'rating' | 'a-z';
  }>({
    countries: [],
    years: [],
    sortType: 'rating',
    category: '',
  });
  const router = useRouter();

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleOpenSearch = () => {
    // setOpenSearch(true);
    router.push('/modal/student-search');
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <Box bgColor={colors.white} mb={4}>
        <ScreenHeader
          title="QUẢN LÝ HỌC VIÊN"
          isSearch
          onPressSearch={handleOpenSearch}
        />
      </Box>

      <Box p={16}>
        <FilterButton onOpenFilter={handleOpenModal} />
      </Box>

      <FlatList
        data={ListStudents}
        renderItem={({ item }) => <RenderStudentItem item={item} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      <StudentFilterBottomSheet
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onSelect={handleOpenModal}
        selectedYears={filters.years}
      />
      {/* <StudentSearchModal
        isOpen={isOpenSearch}
        onClose={() => setOpenSearch(false)}
        onSelect={handleOpenSearch}
      /> */}
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
