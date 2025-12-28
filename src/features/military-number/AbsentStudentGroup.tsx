import InfoSvg from '@/assets/icons/info-svg';
import RemoveSvg from '@/assets/icons/remove-svg';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { useGetStudentList } from '@/hooks/useStudent';
import { colors } from '@/theme/colors';
import { useState } from 'react';

const LIMIT = 200;

const data_reason = [
  { label: 'Điểm danh thể dục buổi sáng', value: '1' },
  { label: 'Điểm danh Ăn cơm sáng', value: '2' },
  { label: 'Điểm danh Học buổi sáng (Võ thuật CAND)', value: '3' },
];

interface Student {
  id: number;
  fullName: string;
  birthday: string;
}

export interface AbsentGroup {
  id: number;
  reason: string;
  students: Student[];
}

type AbsentStudentGroupProps = {
  item: AbsentGroup;
  index: number;
  onEditGroup: (group: AbsentGroup) => void;
  onRemoveGroup: (group: AbsentGroup) => void;
};

export function AbsentStudentGroup({ item, index, onEditGroup, onRemoveGroup }: AbsentStudentGroupProps) {
  const [keyword, setKeyword] = useState<string>();

  const {
    data,
    isLoadingFirstPage: isLoading,
    isRefetching,
    refetch,
    handleLoadMore,
    isFetchingNextPage,
    totalCount,
    isEmpty,
  } = useGetStudentList({
    page: 1,
    limit: LIMIT,
    search: keyword,
  });

  const studentData =
    data?.map((student: any) => ({
      label: student.fullName,
      value: student.id,
      dateofbirth: student.birthday,
    })) ?? [];
  console.log('studentData', studentData);
  return (
    <Box
      key={index}
      borderWidth={1}
      borderStyle="dashed"
      borderColor={colors.blue}
      borderRadius={16}
      mx={16}
    >
      <Box
        bgColor={colors.white}
        pos="absolute"
        left={8}
        top={-10}
        flexDirection="row"
        alignItems="center"
        gap={4}
      >
        <Text fontWeight="bold" color={colors.blue}>
          Nhóm học viên {index + 1}
        </Text>
        <InfoSvg />
      </Box>
      <Box
        pos="absolute"
        right={-8}
        top={-8}
        onPress={() => onRemoveGroup(item)}
      >
        <RemoveSvg />
      </Box>
      <Box mt={4} p={8} gap={16}>
        <Dropdown
          data={data_reason}
          name="reason"
          label={'Lý do nghỉ'}
          isRequired
          placeholder={'Nhập lý do'}
          searchPlaceholder={'Tìm kiếm'}
          onChange={(value: string) => onEditGroup({ ...item, reason: value })}
        />
        <Dropdown
          data={studentData}
          name="absentStudent"
          label={'Học viên vắng'}
          isRequired
          placeholder={'Tên học viên'}
          searchPlaceholder={'Tìm kiếm'}
          onSearchExternal={text => setKeyword(text)}
        />
      </Box>
    </Box>
  );
}
