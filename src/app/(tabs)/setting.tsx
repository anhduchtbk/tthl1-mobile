import HomeColorSvg from '@/assets/icons/home-color-svg';
import UserSvg from '@/assets/icons/user-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { ScreenHeader } from '@/components/header/ScreenHeader';
import { StudentHeader } from '@/features/manage-student/student-detail/StudentHeader';
import { useAuthStore } from '@/store/authStore';
import { colors } from '@/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

export default function SettingScreen() {
  const router = useRouter();
  const clearAuth = useAuthStore(state => state.clearAuth);

  const onPressChangePassword = () => {
    router.push('/setting/change-password');
  };

  const onLogOut = () => {
    clearAuth();
    router.replace('/auth');
  };

  return (
    <LinearGradient colors={['#CAD6FF', '#FFF7DB']} style={{ flex: 1 }}>
      <ScreenHeader title="THÔNG TIN CỦA TÔI" />
      <Box
        flex={1}
        mt={44}
        bgColor={colors.white}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        style={{ paddingVertical: 50, paddingHorizontal: 16 }}
      >
        <Box
          pos="absolute"
          top={-40}
          left={0}
          right={0}
          alignItems="center"
          zIndex={999}
        >
          <Image
            source={{
              uri: 'https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2025/3/24/chi-pu-r4-1742803995521521142964-0-0-568-908-crop-1742804234653431348943.jpg',
            }}
            style={styles.imgAvatar}
          />
        </Box>
        <StudentHeader />
        <Box gap={20}>
          <Box style={styles.btAva} onPress={onPressChangePassword}>
            <UserSvg />
            <Text fontSize={14}>Đổi mật khẩu</Text>
          </Box>

          <Box style={styles.btAva} onPress={onLogOut}>
            <HomeColorSvg />
            <Text fontSize={14}>Đăng xuất</Text>
          </Box>
        </Box>
      </Box>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  imgAvatar: {
    width: 80,
    height: 80,
    borderWidth: 4,
    borderRadius: 40,
    borderColor: colors.white,
  },
  btAva: {
    backgroundColor: '#F6FAFF',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#BED6FF',
    borderWidth: 1,
    gap: 8,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
});
