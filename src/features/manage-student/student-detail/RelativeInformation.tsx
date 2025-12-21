import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

export function RelativeInformation() {
  const basic = [
    {
      relationship: 'Bố',
      infos: [
        {
          title: 'Họ và tên',
          value: 'Nguyễn Văn A',
        },
        {
          title: 'Ngày sinh',
          value: '01/01/1970',
        },
        {
          title: 'Nơi sinh',
          value: 'Ba Đình, Hà Nội',
        },
        {
          title: 'Nghề nghiệp',
          value: 'Công an',
        },
        {
          title: 'Chức vụ',
          value: 'Trưởng phòng PX01 - CATP Hà Nội',
        },
        {
          title: 'SĐT',
          value: '032 808 1300',
        },
      ],
    },
    {
      relationship: 'Mẹ',
      infos: [
        {
          title: 'Họ và tên',
          value: 'Nguyễn Văn A',
        },
        {
          title: 'Ngày sinh',
          value: '01/01/1970',
        },
        {
          title: 'Nơi sinh',
          value: 'Ba Đình, Hà Nội',
        },
        {
          title: 'Nghề nghiệp',
          value: 'Công an',
        },
        {
          title: 'Chức vụ',
          value: 'Trưởng phòng PX01 - CATP Hà Nội',
        },
        {
          title: 'SĐT',
          value: '032 808 1300',
        },
      ],
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
        mb={5}
      >
        <Text fontSize={16} color={colors.primary[20]}>
          Thông tin nhân thân
        </Text>
      </Box>
      {basic.map((item, index) => {
        return <RenderListItem item={item} key={index} />;
      })}
    </Box>
  );
}

interface RowItem {
  title: string;
  value: string;
}

type RowItemProps = PropsWithChildren<{
  item: {
    relationship: string;
    infos: RowItem[];
  };
}>;

const RenderListItem = ({ item }: RowItemProps) => {
  return (
    <Box>
      <Box
        w={80}
        h={24}
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderColor={colors.primary[20]}
        borderRadius={16}
        mt={20}
        mb={8}
      >
        <Text fontSize={FontSize.SMALL} color={colors.primary[20]}>
          {item.relationship}
        </Text>
      </Box>
      <Box style={styles.containerItem}>
        {item.infos.map((item, index) => {
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
    </Box>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 16,
    gap: 7,

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
