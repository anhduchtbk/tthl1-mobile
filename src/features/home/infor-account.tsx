import NotificationSvg from '@/assets/icons/notification-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { useAuthStore } from '@/store/authStore';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { Image, StyleSheet } from 'react-native';

export function InforAccount() {
  const { user } = useAuthStore();

  return (
    <Box gap={24}>
      <Box flexDirection="row" mt={6} gap={8}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Box flex={1}>
          <Text
            numberOfLines={1}
            fontWeight="bold"
            fontSize={18}
            color={colors.white}
          >
            {user?.name || ''}
          </Text>
          <Text numberOfLines={1} color={colors.white}>
            {user?.description || ''}
          </Text>
        </Box>
        <Box>
          <NotificationSvg />
          <Box
            borderRadius={100}
            borderWidth={1}
            borderColor={colors.white}
            justifyContent="center"
            alignItems="center"
            bgColor={colors.red}
            position="absolute"
            right={-6}
            top={-6}
            w={18}
            h={18}
          >
            <Text color={colors.white} fontSize={8}>
              1
            </Text>
          </Box>
        </Box>
      </Box>
      <Box bgColor={'#FFF7DB'} borderRadius={16}>
        <Image
          source={require('@/assets/images/background-banner-home.png')}
          style={styles.imgBanner}
          resizeMode="stretch"
        />
        <Box p={24} pb={20} flexDirection="row" alignItems="center" gap={12}>
          <Box flex={1} gap={12}>
            <Text fontWeight="bold" fontSize={FontSize.LARGE}>
              Trung tâm Huấn luyện và Giáo dục nghề nghiệp số 1
            </Text>
            <Text
              fontWeight="black"
              fontSize={FontSize.LARGE}
              color={colors.red}
            >
              TIỂU ĐOÀN 2
            </Text>
          </Box>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.imgLogo}
          />
        </Box>
      </Box>
    </Box>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  txtTitle: {},
  logo: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#F7F7F7',
    borderRadius: 48,
  },
  imgLogo: {
    width: 65,
    height: 73,
  },
  imgBanner: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});
