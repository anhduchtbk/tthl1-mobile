import FilterSvg from '@/assets/icons/filter-svg';
import PartyMemberSvg from '@/assets/icons/party-member-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function ManageStudentScreen() {
  return (
    <Box flex={1}>
      <Box bgColor={'white'}>
        <ScreenHeader title="QUẢN LÝ HỌC VIÊN" />
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
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ flex: 1, paddingHorizontal: 16, paddingTop: 16 }}
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

type ItemProps = {
  fullName: string;
  dob: string;
  isPartyMember: boolean;
  division: string;
};

type RenderItemProps = {
  item: ItemProps;
};

const RenderItem = (itemProps: RenderItemProps) => {
  return (
    <Box style={styles.card}>
      <Text color={colors.text[3]} fontWeight="bold">
        {itemProps.item.fullName}
      </Text>
      <Box flexDirection="row" alignItems="center" gap={36} mt={4}>
        <Text color={colors.text[1]} fontSize={11}>
          Đơn vị: {itemProps.item.division}
        </Text>
        <Text color={colors.text[1]} fontSize={11}>
          Ngày sinh: {itemProps.item.dob}
        </Text>
      </Box>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flex={1}>
          {itemProps.item.isPartyMember && (
            <Box flexDirection="row" alignItems="center" gap={8}>
              <PartyMemberSvg width={13} height={13} />
              <Text color={colors.text[1]} fontSize={11}>
                Đảng viên
              </Text>
            </Box>
          )}
        </Box>
        <TouchableOpacity activeOpacity={0.7} style={styles.containerBox}>
          <Text fontSize={FontSize.SMALL} color={colors.primary[20]}>
            Xem thêm
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,

    padding: 16,
    marginBottom: 16,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    // Android shadow
    elevation: 6,
  },

  containerBox: {
    borderWidth: 1,
    borderColor: '#3867F8',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
