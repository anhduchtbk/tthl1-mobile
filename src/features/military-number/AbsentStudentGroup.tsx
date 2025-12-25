import InfoSvg from '@/assets/icons/info-svg';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

const data = [
  { label: 'Điểm danh thể dục buổi sáng', value: '1' },
  { label: 'Điểm danh Ăn cơm sáng', value: '2' },
  { label: 'Điểm danh Học buổi sáng (Võ thuật CAND)', value: '3' },
];

const studentData = [
  { label: 'Điểm danh thể dục buổi sáng', value: '1' },
  { label: 'Điểm danh Ăn cơm sáng', value: '2' },
  { label: 'Điểm danh Học buổi sáng (Võ thuật CAND)', value: '3' },
];

export function AbsentStudentGroup() {
  const router = useRouter();

  return (
    <Box
      borderWidth={1}
      borderStyle="dashed"
      borderColor={colors.blue}
      borderRadius={16}
    >
      <Box
        bgColor={colors.white}
        pos="absolute"
        left={8}
        top={-10}
        flexDirection="row"
        alignItems="center"
        gap={4}
      >
        <Text fontWeight="bold" color={colors.blue}>
          Nhóm học viên 1
        </Text>
        <InfoSvg />
      </Box>
      <Box p={8} gap={16}>
        <Dropdown
          data={data}
          name="reason"
          label={'Lý do nghỉ'}
          isRequired
          placeholder={'Nhập lý do'}
          searchPlaceholder={'Tìm kiếm'}
        />
        <Dropdown
          data={studentData}
          name="absentStudent"
          label={'Học viên vắng'}
          isRequired
          placeholder={'Tên học viên'}
          searchPlaceholder={'Tìm kiếm'}
        />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: 12,
    marginBottom: 16,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
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
