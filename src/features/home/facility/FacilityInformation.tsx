import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { PropsWithChildren, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export function FacilityInformation() {
  const [typeIndex, setTypeIndex] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  const basic = [
    {
      timeIndex: 2,
      infos: [
        {
          title: 'Đơn vị yêu cầu',
          value: 'C2 - VB2',
        },
        {
          title: 'Người yêu cầu',
          value: 'Đại đội trưởng: Đại uý Nguyễn Văn A',
        },
        {
          title: 'SĐT',
          value: '032 808 1300',
        },
        {
          title: 'Tên vật chất',
          value: 'Súng tiểu liên AK-47',
        },
        {
          title: 'Lần mượn',
          value: '01',
        },
        {
          title: 'Nơi mượn',
          value: 'Tiểu đoàn 2',
        },
        {
          title: 'Số lượng',
          value: 100,
        },
        {
          title: 'Lý do',
          value: 'C2 VB2 đăng ký mượn vật chất tiểu đoàn phục vụ môn bắn súng',
        },
        {
          title: 'Thời gian tạo yêu cầu',
          value: '19:00:00, 01/01/2025',
        },
        {
          title: 'Trạng thái',
          value: 0,
        },
        {
          title: 'Thời gian phê duyệt',
          value: '20:00:00, 01/01/2025',
        },
        {
          title: 'Người phê duyệt',
          value: 'Tiểu đoàn trưởng: Trung tá Nguyễn Văn A',
        },
      ],
    },
    {
      timeIndex: 1,
      infos: [
        {
          title: 'Đơn vị yêu cầu',
          value: 'C2 - VB2',
        },
        {
          title: 'Người yêu cầu',
          value: 'Đại đội trưởng: Đại uý Nguyễn Văn A',
        },
        {
          title: 'SĐT',
          value: '032 808 1300',
        },
        {
          title: 'Tên vật chất',
          value: 'Súng tiểu liên AK-47',
        },
        {
          title: 'Lần mượn',
          value: '01',
        },
        {
          title: 'Nơi mượn',
          value: 'Tiểu đoàn 2',
        },
        {
          title: 'Số lượng',
          value: 100,
        },
        {
          title: 'Lý do',
          value: 'C2 VB2 đăng ký mượn vật chất tiểu đoàn phục vụ môn bắn súng',
        },
        {
          title: 'Thời gian tạo yêu cầu',
          value: '19:00:00, 01/01/2025',
        },
        {
          title: 'Trạng thái',
          value: 1,
        },
        {
          title: 'Thời gian phê duyệt',
          value: '20:00:00, 01/01/2025',
        },
        {
          title: 'Người phê duyệt',
          value: 'Tiểu đoàn trưởng: Trung tá Nguyễn Văn A',
        },
      ],
    },
  ];

  return (
    <Box pt={8}>
      <Text fontSize={20} fontWeight="bold" color={'#333'}>
        Đơn vị: C2 - VB2
      </Text>
      <Box pt={8} flexDirection="row" alignItems="center">
        <Box
          alignSelf="flex-start"
          py={8}
          px={16}
          borderBottomWidth={1}
          borderBottomColor={typeIndex === 1 ? colors.primary[20] : '#F1F1F1'}
          onPress={() => setTypeIndex(1)}
        >
          <Text
            fontSize={16}
            color={typeIndex === 1 ? colors.primary[20] : '#515151'}
          >
            Mượn vật chất
          </Text>
        </Box>
        <Box
          alignSelf="flex-start"
          py={8}
          px={16}
          borderBottomWidth={1}
          borderBottomColor={typeIndex === 2 ? colors.primary[20] : '#F1F1F1'}
          onPress={() => setTypeIndex(2)}
        >
          <Text
            fontSize={16}
            color={typeIndex === 2 ? colors.primary[20] : '#515151'}
          >
            Trả vật chất
          </Text>
        </Box>
      </Box>

      <Box py={8}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {basic.map((item, index) => {
            return (
              <Box
                key={index}
                w={80}
                h={36}
                justifyContent="center"
                alignItems="center"
                borderWidth={1}
                borderColor={
                  tabIndex === index ? colors.primary[20] : colors.white
                }
                borderRadius={16}
                onPress={() => setTabIndex(index)}
              >
                <Text
                  color={tabIndex === index ? colors.primary[20] : '#515151'}
                >
                  Lần {item.timeIndex}
                </Text>
              </Box>
            );
          })}
        </ScrollView>
      </Box>
      <RenderTimeItem item={basic[tabIndex]} />
    </Box>
  );
}

interface RowItem {
  title: string;
  value: string | number;
}

type RowItemProps = PropsWithChildren<{
  item: {
    timeIndex: number;
    infos: RowItem[];
  };
}>;

const RenderTimeItem = ({ item }: RowItemProps) => {
  return (
    <Box style={styles.containerItem}>
      {item.infos.map((item, index) => {
        return (
          <Box
            key={index}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            gap={16}
          >
            <Text fontSize={14} fontWeight="bold" color={colors.text[3]}>
              {item.title}:
            </Text>
            {index === 9 ? (
              <Box
                w={60}
                h={22}
                justifyContent="center"
                alignItems="center"
                borderWidth={item.value === 0 ? 1 : 0}
                borderColor={colors.primary[20]}
                borderRadius={16}
                bgColor={
                  item.value === 0
                    ? colors.white
                    : item.value === 1
                    ? '#27C840'
                    : '#FF5F57'
                }
              >
                <Text
                  fontSize={FontSize.SMALL}
                  color={item.value === 0 ? colors.blue : colors.white}
                >
                  {item.value === 2 ? 'Từ chối' : 'Đồng ý'}
                </Text>
              </Box>
            ) : (
              <Box
                flex={1}
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-end"
                gap={16}
              >
                <Text
                  fontSize={14}
                  color={colors.text[3]}
                  align="right"
                  fontWeight={index === 3 || index === 6 ? 'bold' : 'regular'}
                >
                  {item.value}
                </Text>
                {index === 0 && (
                  <Box
                    w={60}
                    h={22}
                    justifyContent="center"
                    alignItems="center"
                    borderWidth={1}
                    borderColor={colors.primary[20]}
                    borderRadius={16}
                  >
                    <Text fontSize={FontSize.SMALL} color={colors.blue}>
                      Lịch sử
                    </Text>
                  </Box>
                )}
              </Box>
            )}
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
