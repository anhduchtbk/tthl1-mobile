import { Company } from '@/api/types/company';
import { Equipment } from '@/api/types/inventory';
import { Transaction } from '@/api/types/transaction';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { STATUS_TYPE } from '@/constants/value';
import { RenderRequestItem } from '@/features/home/notification/RenderRequestItem';
import { useGetTransactionEquipmentByCompany } from '@/hooks/useTransaction';
import { formatDate, formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import dayjs from 'dayjs';
import { useSearchParams } from 'expo-router/build/hooks';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

export default function HistoryRequestScreen() {
  const searchParams = useSearchParams();
  const companyItem = JSON.parse(
    searchParams.get('companyItem') || ''
  ) as Company;
  const equipmentItem = JSON.parse(
    searchParams.get('equipmentItem') || ''
  ) as Equipment;

  const [typeIndex, setTypeIndex] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  const { data: transactionsByType } = useGetTransactionEquipmentByCompany(
    equipmentItem?.id,
    companyItem?.id
  );

  const borrowData =
    transactionsByType?.transactions?.filter(item => item?.type === 'borrow') ||
    [];
  const returnData =
    transactionsByType?.transactions?.filter(item => item?.type === 'return') ||
    [];

  const formatData = (transactions: Transaction[]) => {
    return transactions.map(item => {
      return {
        timeIndex: formatDate(item?.createdAt),
        infos: [
          {
            title: 'Người yêu cầu',
            type: 'requester',
            value: item?.user?.fullName,
          },
          {
            title: 'SĐT',
            type: 'phoneNumber',
            value: item?.user?.phoneNumber,
          },
          {
            title: 'Tên vật chất',
            type: 'facilityFullname',
            value: equipmentItem?.name,
          },
          // {
          //   title: 'Lần mượn',
          //   type: 'requestTime',
          //   value: transactions?.length + 1 - index,
          // },
          {
            title: 'Nơi mượn',
            type: 'requestAddress',
            value:
              item?.borrowSource?.name !== 'Tiểu đoàn 2'
                ? `Đại đội ${item?.borrowSource?.name}`
                : 'Tiểu đoàn 2',
          },
          {
            title: 'Số lượng',
            type: 'quantity',
            value: item?.quantity,
          },
          {
            title: 'Lý do',
            type: 'reason',
            value: item?.reason,
          },
          {
            title: 'Thời gian tạo yêu cầu',
            type: 'createdAt',
            value: dayjs(item?.createdAt).format('hh:mm:ss, DD/MM/YYYY'),
          },
          {
            title: 'Trạng thái',
            type: 'status',
            value: item?.status,
          },
          {
            title: 'Thời gian phê duyệt',
            type: 'approvalTime',
            value: item?.approvedAt
              ? dayjs(item?.approvedAt).format('hh:mm:ss, DD/MM/YYYY')
              : '--/--/----',
            isInvisible: item?.status !== STATUS_TYPE.APPROVED,
          },
          {
            title: 'Người phê duyệt',
            type: 'approver',
            value: '',
            isInvisible: item?.status !== STATUS_TYPE.APPROVED,
          },
          {
            title: 'Lý do từ chối',
            type: 'rejectReason',
            value: item?.rejectReason || '',
            isInvisible: item?.status !== STATUS_TYPE.DENIED,
          },
        ],
      };
    });
  };

  return (
    <Box flex={1} bgColor={colors.white}>
      <ScreenHeader
        title="LỊCH SỬ YÊU CẦU"
        subTitle={`C${companyItem.name} - ${formatEducation(
          companyItem?.course?.type
        )}`}
      />
      <Box px={16}>
        <Box pt={16} pb={8} flexDirection="row" alignItems="center">
          <Box
            flex={1}
            py={8}
            borderBottomWidth={1}
            borderBottomColor={typeIndex === 1 ? colors.primary[20] : '#F1F1F1'}
            onPress={() => {
              setTypeIndex(1);
              setTabIndex(0);
            }}
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
            onPress={() => {
              setTypeIndex(2);
              setTabIndex(0);
            }}
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
          <>
            <Box py={8}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {formatData(typeIndex === 1 ? borrowData : returnData)?.map(
                  (item, index) => {
                    return (
                      <Box
                        key={index}
                        p={8}
                        mr={4}
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
                          color={
                            tabIndex === index ? colors.primary[20] : '#515151'
                          }
                        >
                          {item.timeIndex}
                        </Text>
                      </Box>
                    );
                  }
                )}
              </ScrollView>
            </Box>
            <RenderRequestItem
              rowItem={
                formatData(typeIndex === 1 ? borrowData : returnData)?.[
                  tabIndex
                ]
              }
            />
          </>
        ) : (
          <EmptyScreen
            text={`Đại đội ${companyItem.name} - ${formatEducation(
              companyItem?.course?.type
            )} không có\nlịch sử yêu cầu ${
              typeIndex === 1 ? 'mượn' : 'trả'
            } vật chất`}
          />
        )}
      </Box>
    </Box>
  );
}
