import InfoSvg from '@/assets/icons/info-svg';
import RemoveSvg from '@/assets/icons/remove-svg';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';

const data = [
  { label: 'Điểm danh thể dục buổi sáng', value: '1' },
  { label: 'Điểm danh Ăn cơm sáng', value: '2' },
  { label: 'Điểm danh Học buổi sáng (Võ thuật CAND)', value: '3' },
];

const studentData = [
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

export function AbsentStudentGroup({
  item,
  index,
  onEditGroup,
  onRemoveGroup,
}: AbsentStudentGroupProps) {
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
          data={data}
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
          // onChange={(value: string[]) => onEditGroup({ ...item, students: value })}
        />
      </Box>
    </Box>
  );
}
