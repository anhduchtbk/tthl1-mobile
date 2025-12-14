import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { PropsWithChildren } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = PropsWithChildren<{
  label: string;
  invisible?: boolean;
  style?: any;
  defaultValue?: string;
  autoFocus?: boolean;
}>;

export function FormInputLabel({ label, autoFocus = false }: Props) {
  return (
    <Box gap={4}>
      <Text color={colors.text[2]}>{label}</Text>
      <Box
        h={50}
        justifyContent="center"
        borderWidth={0.75}
        borderColor={colors.white}
        borderRadius={10}
        px={16}
      >
        <TextInput autoFocus={autoFocus} style={styles.inputStyle} />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    paddingVertical: 0,
    color: colors.text['darkest'],
  },
});
