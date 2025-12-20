import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

type PropsSchedule = {
  schedule: string; // buổi học: sáng, chiều, ngoại khoá
  subject?: string;
  lesson?: number;
  isDone?: boolean;
  teacher?: string;
  bgColor?: string;
  borderColor?: string;
};

export function Schedule({
  schedule,
  subject,
  lesson,
  isDone,
  teacher,
  bgColor,
  borderColor,
}: PropsSchedule) {
  return (
    <Box gap={12}>
      <Box
        backgroundColor={bgColor}
        flexDirection="row"
        alignItems="center"
        gap={12}
      >
        <Box
          borderWidth={3}
          borderColor={borderColor}
          borderRadius={3}
          style={{ minHeight: 20 }}
          backgroundColor={colors.black}
        />
        <Text style={styles.txtSchedule} fontSize={14} color={'#777777'}>
          {schedule} (7:30 - 11:00)
        </Text>
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize={14}>
          {subject}
        </Text>
        <Text fontWeight="bold" fontSize={13} color={'#565656'}>
          Buổi: {lesson} {isDone ? '(XONG)' : ''}
        </Text>
        <Text fontSize={13} color={'#565656'}>
          CBHL: {teacher}
        </Text>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  txtSchedule: {
    fontWeight: 800,
    lineHeight: 20,
  },
});
