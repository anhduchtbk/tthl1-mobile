import EyeSvg from '@/assets/icons/eye-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

type Props = PropsWithChildren<{
  label: string;
  style?: any;
  autoFocus?: boolean;
  isPassword?: boolean;
  isRequired?: boolean;
}>;

export function FormInputLabel({
  label,
  autoFocus = false,
  isPassword,
  isRequired,
}: Props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <Box gap={4}>
      <Text color={colors.text[2]}>
        {label} <Text color={colors.action.error}>{isRequired && '*'}</Text>
      </Text>
      <Box
        h={50}
        justifyContent="center"
        borderWidth={0.75}
        borderColor={colors.blue}
        borderRadius={10}
        px={16}
        flexDirection="row"
        alignItems="center"
      >
        <TextInput
          style={styles.inputStyle}
          secureTextEntry={secureTextEntry}
          autoFocus={autoFocus}
        />
        {isPassword ? (
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            activeOpacity={0.7}
          >
            <EyeSvg />
          </TouchableOpacity>
        ) : (
          <></>
        )}
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
  input: {
    flex: 1,
    paddingVertical: 12,
  },
});
