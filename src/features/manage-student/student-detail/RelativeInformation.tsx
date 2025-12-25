import { FamilyMember } from '@/api/types/student';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { formatFamilyRole, formatPhoneNumber } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { PropsWithChildren } from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';

export function RelativeInformation({
  familyMembers,
}: {
  familyMembers: FamilyMember[];
}) {
  const basic = familyMembers.flatMap(item => {
    return {
      relationship: formatFamilyRole(item.familyRole),
      infos: [
        {
          title: 'Họ và tên',
          type: 'fullName',
          value: item.fullName,
        },
        {
          title: 'Ngày sinh',
          type: 'birthday',
          value: '',
        },
        {
          title: 'Nơi sinh',
          type: 'birthPlace',
          value: item.birthPlace,
        },
        {
          title: 'Nghề nghiệp',
          type: 'job',
          value: item.job,
        },
        {
          title: 'Chức vụ',
          type: 'jobRank',
          value: item.jobRank,
        },
        {
          title: 'SĐT',
          type: 'phoneNumber',
          value: formatPhoneNumber(item.phoneNumber),
        },
      ],
    };
  });

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
  type: string;
  value: string | null;
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
              <TouchableOpacity
                activeOpacity={0.7}
                disabled={item.type !== 'phoneNumber'}
                onPress={() => Linking.openURL(`tel: ${item.value}`)}
              >
                <Text fontSize={14} color={colors.text[3]}>
                  {item.value || '-'}
                </Text>
              </TouchableOpacity>
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
