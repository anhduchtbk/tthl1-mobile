import { Transaction, TransactionsByType } from '@/api/types/transaction';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { EmptyScreen } from '@/components/empty/EmptyScreen';
import { EDUCATION_TYPE, STATUS_TYPE } from '@/constants/value';
import { formatDate, formatEducation } from '@/lib/utils';
import { colors } from '@/theme/colors';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { RenderRequestItem } from '../notification/RenderRequestItem';

interface FacilityInformationProps {
  company: {
    id: number;
    name: string;
    course: {
      id: number;
      name: string;
      type: EDUCATION_TYPE;
    };
  };
  equipment: {
    id: number;
    name: string;
  };
  transactionsByType: TransactionsByType[];
}

export function FacilityInformation({
  company,
  equipment,
  transactionsByType,
}: FacilityInformationProps) {
  const [typeIndex, setTypeIndex] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  const borrowData =
    transactionsByType?.find(item => item?.type === 'borrow')?.transactions ||
    [];
  const returnData =
    transactionsByType?.find(item => item?.type === 'return')?.transactions ||
    [];

  const formatData = (transactions: Transaction[]) => {
    return transactions.map(item => {
      return {
        timeIndex: formatDate(item?.createdAt),
        infos: [
          {
            title: 'Đơn vị yêu cầu',
            type: 'requestedUnit',
            value: `C${company?.name} - ${formatEducation(
              company?.course?.type || ''
            )}`,
          },
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
            value: equipment?.name,
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
    <Box mb={20}>
      <Text fontSize={20} fontWeight="bold" color={'#333'}>
        Đơn vị: C{company.name}
      </Text>
      <Box pt={8} flexDirection="row" alignItems="center">
        <Box
          alignSelf="flex-start"
          py={8}
          px={16}
          borderBottomWidth={1}
          borderBottomColor={typeIndex === 1 ? colors.primary[20] : '#F1F1F1'}
          onPress={() => {
            setTypeIndex(1);
            setTabIndex(0);
          }}
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
          onPress={() => {
            setTypeIndex(2);
            setTabIndex(0);
          }}
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
          {formatData(typeIndex === 1 ? borrowData : returnData).map(
            (item, index) => {
              return (
                <Box
                  key={index}
                  p={8}
                  mr={4}
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
                    {item?.timeIndex}
                  </Text>
                </Box>
              );
            }
          )}
        </ScrollView>
      </Box>
      {(typeIndex === 1 && borrowData?.length > 0) ||
      (typeIndex === 2 && returnData?.length > 0) ? (
        <RenderRequestItem
          company={company}
          equipment={equipment}
          rowItem={
            formatData(typeIndex === 1 ? borrowData : returnData)?.[tabIndex]
          }
        />
      ) : (
        <Box mt={-25} mb={25}>
          <EmptyScreen
            text={`Đại đội ${company?.name} không có\nlịch sử yêu cầu ${
              typeIndex === 1 ? 'mượn' : 'trả'
            } vật chất`}
          />
        </Box>
      )}
    </Box>
  );
}
