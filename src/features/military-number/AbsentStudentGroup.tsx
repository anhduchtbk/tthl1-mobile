import InfoSvg from '@/assets/icons/info-svg';
import RemoveSvg from '@/assets/icons/remove-svg';
import Dropdown from '@/components/common/Dropdown/Dropdown';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import TextField from '@/components/common/TextField/TextField';
import { useGetStudentList } from '@/hooks/useStudent';
import { colors } from '@/theme/colors';
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

const LIMIT = 200;

const data_reason = [
  { label: 'Quân y', value: 'Quân y' },
  { label: 'Nghỉ tranh thủ', value: 'Nghỉ tranh thủ' },
  { label: 'Văn nghệ', value: 'Văn nghệ' },
  { label: 'NV đoàn thanh niên', value: 'NV đoàn thanh niên' },
  { label: 'Khác', value: 'others' },
];

interface Student {
  id: number;
  fullName: string;
  birthday: string;
}

export interface AbsentGroup {
  id: number;
  reason: string;
  students: string[];
  otherReason?: string;
}

type AbsentStudentGroupProps = {
  item: AbsentGroup;
  index: number;
  onEditGroup: (item: AbsentGroup, newItem: AbsentGroup) => void;
  onRemoveGroup: (group: AbsentGroup) => void;
  handleChangeReasonTxt?: (value: string) => void;
};

export function AbsentStudentGroup({
  item,
  index,
  onEditGroup,
  onRemoveGroup,
  handleChangeReasonTxt,
}: AbsentStudentGroupProps) {
  const [keyword, setKeyword] = useState<string>();

  const { data } = useGetStudentList({
    page: 1,
    limit: LIMIT,
    search: keyword,
  });

  const studentData =
    data?.map((student: Student) => ({
      label: student.fullName,
      value: `${student.id}`,
      birthday: student.birthday,
    })) ?? [];

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (item.reason === 'others') {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  }, [fadeAnim, item.reason]);

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
      {index > 0 && (
        <Box
          pos="absolute"
          right={-8}
          top={-8}
          onPress={() => onRemoveGroup(item)}
        >
          <RemoveSvg />
        </Box>
      )}
      <Box mt={4} p={8} gap={16}>
        <Dropdown
          data={data_reason}
          label={'Lý do nghỉ'}
          isRequired
          placeholder={'Nhập lý do'}
          searchPlaceholder={'Tìm kiếm'}
          onChange={(value: string) =>
            onEditGroup(item, { ...item, reason: value })
          }
        />
        {item.reason === 'others' && (
          <Animated.View style={{ opacity: fadeAnim }}>
            <TextField
              label="Lý do khác"
              placeholder="Nhập lý do..."
              placeholderTextColor={colors.placeholder}
              returnKeyType="next"
              onChangeText={handleChangeReasonTxt}
              multiline
              numberOfLines={4}
              inputStyle={{ minHeight: 80 }}
            />
          </Animated.View>
        )}

        <Dropdown
          data={studentData}
          label={'Học viên vắng'}
          isRequired
          isMultiSelect
          placeholder={'Tên học viên'}
          searchPlaceholder={'Tìm kiếm'}
          onSearchExternal={text => setKeyword(text)}
          onChange={(values: string[]) =>
            onEditGroup(item, { ...item, students: values })
          }
        />
      </Box>
    </Box>
  );
}
