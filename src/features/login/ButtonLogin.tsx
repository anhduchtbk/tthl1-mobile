import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

export function ButtonLogin() {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => router.replace('/(tabs)')}
    >
      <Text
        fontSize={FontSize.LARGE}
        fontWeight="bold"
        color={colors.primary[60]}
      >
        ĐĂNG NHẬP
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
