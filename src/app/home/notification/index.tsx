import FilterButton from '@/components/common/Button/filter-button';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { RenderCompanyItem } from '@/features/home/notification/RenderCompanyItem';
import { RenderNotificationItem } from '@/features/home/notification/RenderNotificationItem';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';

const typeList = [
  { id: 1, type: 'all', name: 'Tất cả' },
  { id: 2, type: 'company', name: 'Đơn vị' },
  { id: 3, type: 'is_pending', name: 'Chờ duyệt' },
  { id: 4, type: 'done', name: 'Đã duyệt' },
];

export default function NotificationScreen() {
  const [typeIndex, setTypeIndex] = useState(1);

  return (
    <Box flex={1} bgColor={colors.white}>
      <Box
        bgColor={colors.white}
        borderBottomWidth={1}
        borderColor={'#F5F5F5'}
        mb={4}
      >
        <ScreenHeader title="THÔNG BÁO" isSearch />
      </Box>
      <Box p={16} gap={16}>
        <FilterButton />
        <Box>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {typeList.map((item, index) => {
              return (
                <Box
                  key={index}
                  alignSelf="flex-start"
                  py={8}
                  px={16}
                  borderBottomWidth={1}
                  borderBottomColor={
                    item.id === typeIndex ? colors.primary[20] : '#F1F1F1'
                  }
                  onPress={() => setTypeIndex(item.id)}
                >
                  <Text
                    key={index}
                    fontSize={FontSize.LARGE}
                    color={
                      item.id === typeIndex ? colors.primary[20] : '#515151'
                    }
                  >
                    {item.name}
                  </Text>
                </Box>
              );
            })}
          </ScrollView>
        </Box>
      </Box>
      {typeIndex === 2 ? (
        <FlatList
          data={ListCompany}
          renderItem={({ item }) => <RenderCompanyItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={ListNotification}
          renderItem={({ item }) => <RenderNotificationItem item={item} />}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        />
      )}
      <Box h={100} />
    </Box>
  );
}

const ListNotification = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    facilityFullname: 'Súng tiểu liên AK-47',
    companyFullname: 'Đại đội 1 - VB2',
    facilityAmount: 110,
    commandTime: 4,
    commanderFullname: 'Nguyễn Văn A',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    facilityFullname: 'Súng tiểu liên AK-47',
    companyFullname: 'Đại đội 1 - VB2',
    facilityAmount: 110,
    commandTime: 4,
    commanderFullname: 'Nguyễn Văn A',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    facilityFullname: 'Súng tiểu liên AK-47',
    companyFullname: 'Đại đội 1 - VB2',
    facilityAmount: 110,
    commandTime: 4,
    commanderFullname: 'Nguyễn Văn A',
  },
];

const ListCompany = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    notificationAmount: 1,
    companyFullname: 'Đại đội 1 - VB2',
    facilityFullname: 'Súng tiểu liên AK-47',
    companyAmount: 110,
    commanderAmount: 4,
    commanderFullname: 'Nguyễn Văn A',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    notificationAmount: 0,
    companyFullname: 'Đại đội 1 - VB2',
    facilityFullname: 'Súng tiểu liên AK-47',
    companyAmount: 110,
    commanderAmount: 4,
    commanderFullname: 'Nguyễn Văn A',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    notificationAmount: 0,
    companyFullname: 'Đại đội 1 - VB2',
    facilityFullname: 'Súng tiểu liên AK-47',
    companyAmount: 110,
    commanderAmount: 4,
    commanderFullname: 'Nguyễn Văn A',
  },
];
