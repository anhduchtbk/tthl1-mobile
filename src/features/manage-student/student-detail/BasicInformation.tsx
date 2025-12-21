import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

export function BasicInformation() {
  const basic = [
    {
      title: 'Quê quán',
      value: 'Thanh Xuân, Hà Nội',
    },
    {
      title: 'Nơi sinh',
      value: 'Ba Đình, Hà Nội',
    },
    {
      title: 'SĐT',
      value: '032 808 1300',
    },
    {
      title: 'Đoàn viên',
      value: 'Có',
    },
    {
      title: 'Ngày vào đoàn',
      value: '26/03/2020',
    },
    {
      title: 'Đảng viên',
      value: 'Không',
    },
    {
      title: 'Ngày vào đảng',
      value: '-',
    },
  ];

  const others = [
    {
      title: 'Chính sách',
      value: 'Không',
    },
    {
      title: 'Năng khiếu',
      value: 'IT | Bóng đá | Văn nghệ',
    },
    {
      title: 'Bệnh lý/Bệnh nền',
      value: 'Tràn dịch khớp gối phải',
    },
    {
      title: 'Dị ứng',
      value: 'Tôm/Cua/Cá',
    },
    {
      title: 'Lưu ý khác',
      value: 'Học viên có sức khoẻ yếu',
    },
    {
      title: 'Cán bộ chỉ huy',
      value: 'Đại uý Nguyễn Văn A',
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
  value: string;
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
              {item.value}
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
