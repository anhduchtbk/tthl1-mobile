import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { RenderRequestItem } from '../notification/RenderRequestItem';

export function FacilityInformation() {
  const [typeIndex, setTypeIndex] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  const basic = [
    {
      timeIndex: 2,
      infos: [
        {
          title: 'Đơn vị yêu cầu',
          type: 'requestedUnit',
          value: 'C2 - VB2',
        },
        {
          title: 'Người yêu cầu',
          type: 'requester',
          value: 'Đại đội trưởng: Đại uý Nguyễn Văn A',
        },
        {
          title: 'SĐT',
          type: 'phoneNumber',
          value: '032 808 1300',
        },
        {
          title: 'Tên vật chất',
          type: 'facilityFullname',
          value: 'Súng tiểu liên AK-47',
        },
        {
          title: 'Lần mượn',
          type: 'requestTime',
          value: '01',
        },
        {
          title: 'Nơi mượn',
          type: 'requestAddress',
          value: 'Tiểu đoàn 2',
        },
        {
          title: 'Số lượng',
          type: 'quantity',
          value: 100,
        },
        {
          title: 'Lý do',
          type: 'reason',
          value: 'C2 VB2 đăng ký mượn vật chất tiểu đoàn phục vụ môn bắn súng',
        },
        {
          title: 'Thời gian tạo yêu cầu',
          type: 'createdAt',
          value: '19:00:00, 01/01/2025',
        },
        {
          title: 'Trạng thái',
          type: 'status',
          value: 0,
        },
        {
          title: 'Thời gian phê duyệt',
          type: 'approvalTime',
          value: '20:00:00, 01/01/2025',
        },
        {
          title: 'Người phê duyệt',
          type: 'approver',
          value: 'Tiểu đoàn trưởng: Trung tá Nguyễn Văn A',
        },
      ],
    },
    {
      timeIndex: 1,
      infos: [
        {
          title: 'Đơn vị yêu cầu',
          type: 'requestedUnit',
          value: 'C2 - VB2',
        },
        {
          title: 'Người yêu cầu',
          type: 'requester',
          value: 'Đại đội trưởng: Đại uý Nguyễn Văn A',
        },
        {
          title: 'SĐT',
          type: 'phoneNumber',
          value: '032 808 1300',
        },
        {
          title: 'Tên vật chất',
          type: 'facilityFullname',
          value: 'Súng tiểu liên AK-47',
        },
        {
          title: 'Lần mượn',
          type: 'requestTime',
          value: '01',
        },
        {
          title: 'Nơi mượn',
          type: 'requestAddress',
          value: 'Tiểu đoàn 2',
        },
        {
          title: 'Số lượng',
          type: 'quantity',
          value: 100,
        },
        {
          title: 'Lý do',
          type: 'reason',
          value: 'C2 VB2 đăng ký mượn vật chất tiểu đoàn phục vụ môn bắn súng',
        },
        {
          title: 'Thời gian tạo yêu cầu',
          type: 'createdAt',
          value: '19:00:00, 01/01/2025',
        },
        {
          title: 'Trạng thái',
          type: 'status',
          value: 0,
        },
        {
          title: 'Thời gian phê duyệt',
          type: 'approvalTime',
          value: '20:00:00, 01/01/2025',
        },
        {
          title: 'Người phê duyệt',
          type: 'approver',
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
      <RenderRequestItem rowItem={basic[tabIndex]} />
    </Box>
  );
}
