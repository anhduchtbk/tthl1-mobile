import { Student } from '@/api/types/student';
import PartyMemberSvg from '@/assets/icons/party-member-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatDate } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

type RenderItemProps = {
  item: Student;
};

export function RenderStudentItem({ item }: RenderItemProps) {
  const router = useRouter();

  const onSeeMore = () => {
    router.push({
      pathname: '/manage-student/student-detail',
      params: { studentDetail: JSON.stringify(item) },
    });
  };

  return (
    <Box style={styles.card}>
      <Text color={colors.text[3]} fontWeight="bold">
        {item.fullName} - {item.university}
      </Text>
      <Box flexDirection="row" alignItems="center" gap={36} mt={4}>
        <Text color={colors.text[1]} fontSize={11}>
          Đơn vị: A{item.squad}B{item.platoon}C{item.company.name}
        </Text>
        <Text color={colors.text[1]} fontSize={11}>
          Ngày sinh: {formatDate(item.birthday)}
        </Text>
      </Box>
      <Box
        flexDirection="row"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Box flex={1}>
          {item.isPartyMember && (
            <Box flexDirection="row" alignItems="center" gap={8}>
              <PartyMemberSvg width={13} height={13} />
              <Text color={colors.text[1]} fontSize={11}>
                Đảng viên
              </Text>
            </Box>
          )}
        </Box>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.containerBox}
          onPress={onSeeMore}
        >
          <Text fontSize={FontSize.SMALL} color={colors.blue}>
            Xem thêm
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
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
    borderColor: colors.blue,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
