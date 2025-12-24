import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import React, { PropsWithChildren, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    useWindowDimensions,
} from 'react-native';

const basic = [
  {
    timeIndex: 2,
    infos: [
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

export default function HistoryRequestScreen() {
  const [typeIndex, setTypeIndex] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader title="LỊCH SỬ YÊU CẦU" subTitle="ĐẠI ĐỘI 2 - VB2" />
      <Box px={16}>
        <Box pt={16} pb={8} flexDirection="row" alignItems="center">
          <Box
            flex={1}
            py={8}
            borderBottomWidth={1}
            borderBottomColor={typeIndex === 1 ? colors.primary[20] : '#F1F1F1'}
            onPress={() => setTypeIndex(1)}
          >
            <Text
              fontSize={FontSize.LARGE}
              align="center"
              color={typeIndex === 1 ? colors.primary[20] : '#515151'}
            >
              Mượn vật chất
            </Text>
          </Box>
          <Box
            flex={1}
            py={8}
            borderBottomWidth={1}
            borderBottomColor={typeIndex === 2 ? colors.primary[20] : '#F1F1F1'}
            onPress={() => setTypeIndex(2)}
          >
            <Text
              fontSize={FontSize.LARGE}
              align="center"
              color={typeIndex === 2 ? colors.primary[20] : '#515151'}
            >
              Trả vật chất
            </Text>
          </Box>
        </Box>
        {typeIndex === 1 ? (
          <RenderTimeItem
            item={basic[tabIndex]}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
          />
        ) : (
          <RenderEmpty typeIndex={typeIndex} />
        )}
      </Box>
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
  tabIndex: number;
  setTabIndex: (index: number) => void;
}>;

const RenderTimeItem = ({ item, tabIndex, setTabIndex }: RowItemProps) => {
  return (
    <>
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
              <Text fontWeight="bold" color={colors.text[3]}>
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
                    fontWeight={index === 2 || index === 5 ? 'bold' : 'regular'}
                  >
                    {item.value}
                  </Text>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

const RenderEmpty = ({ typeIndex }: { typeIndex: number }) => {
  const { width } = useWindowDimensions();

  return (
    <Box mt={50} gap={20} alignItems="center">
      <Image
        source={require('@/assets/images/empty-request.png')}
        style={{ width: width * 0.67, height: width * 0.67 }}
        resizeMode="contain"
      />
      <Text fontSize={FontSize.LARGE} color={'#222222'}>
        Đại đội 2 - VB2 không có{'\n'}lịch sử yêu cầu{' '}
        {typeIndex === 1 ? 'mượn' : 'trả'} vật chất
      </Text>
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
