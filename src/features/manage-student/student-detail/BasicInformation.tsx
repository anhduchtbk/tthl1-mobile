import { Student } from '@/api/types/student';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatBoolean, formatDate } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

export function BasicInformation({
  studentDetail,
}: {
  studentDetail: Student;
}) {
  const basic = [
    {
      title: 'Quê quán',
      value: '',
    },
    {
      title: 'Nơi sinh',
      value: '',
    },
    {
      title: 'SĐT',
      value: '',
    },
    {
      title: 'Đoàn viên',
      value: formatBoolean(studentDetail.isYoungUnionMember),
    },
    {
      title: 'Ngày vào đoàn',
      value: formatDate(studentDetail.youngUnionEnrollmentDate),
    },
    {
      title: 'Đảng viên',
      value: formatBoolean(studentDetail.isPartyMember),
    },
    {
      title: 'Ngày vào đảng',
      value: formatDate(studentDetail.partyEnrollmentDate),
    },
  ];

  const others = [
    {
      title: 'Chính sách',
      value: studentDetail.policy,
    },
    {
      title: 'Năng khiếu',
      value: studentDetail.talent,
    },
    {
      title: 'Bệnh lý/Bệnh nền',
      value: studentDetail.backgroundDisease,
    },
    {
      title: 'Dị ứng',
      value: studentDetail.allergy,
    },
    {
      title: 'Lưu ý khác',
      value: studentDetail.note,
    },
    {
      title: 'Cán bộ chỉ huy',
      value: '',
    },
  ];

  return (
    <Box pt={16}>
      <Box
        alignSelf="flex-start"
        py={8}
        px={16}
        borderBottomWidth={1}
        borderBottomColor={colors.primary[20]}
      >
        <Text fontSize={16} color={colors.primary[20]}>
          Thông tin cơ bản
        </Text>
      </Box>
      <RenderListItem listItem={basic} />
      <RenderListItem listItem={others} />
    </Box>
  );
}

interface RowItem {
  title: string;
  value: string | null;
}

type RowItemProps = PropsWithChildren<{
  listItem: RowItem[];
}>;

const RenderListItem = ({ listItem }: RowItemProps) => {
  return (
    <Box style={styles.containerItem}>
      {listItem.map((item, index) => {
        return (
          <Box
            key={index}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize={14} fontWeight="bold" color={colors.text[3]}>
              {item.title}:
            </Text>
            <Text fontSize={14} color={colors.text[3]}>
              {item.value || '-'}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 16,
    gap: 7,
    marginTop: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
