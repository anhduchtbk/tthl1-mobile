import NotificationSvg from '@/assets/icons/notification-svg';
import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
import { colors } from '@/theme/colors';
import { FontSize } from '@/theme/fonts';
import { Image, StyleSheet } from 'react-native';

export function InforAccount() {
  return (
    <Box gap={24}>
      <Box flexDirection="row" marginLeft={16} marginY={6} gap={8}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Box flex={1}>
          <Text
            numberOfLines={1}
            fontWeight="bold"
            fontSize={13}
            color={colors.white}
          >
            Nguyễn Anh Tuấn
          </Text>
          <Text fontSize={13} numberOfLines={1} color={colors.white}>
            A4 - B2 - C3
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
            right={-1}
            bottom={26}
            w={15}
            h={15}
          >
            <Text color={colors.white} fontSize={8}>
              1
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        flexDirection="row"
        gap={4}
        alignItems="center"
        backgroundColor={'#FFF7DB'}
        borderRadius={16}
        py={5}
        px={20}
      >
        <Image
          source={require('@/assets/images/background-banner-home.png')}
          style={styles.imgBanner}
          resizeMode="contain"
        />
        <Box
          style={{
            flex: 1,
            gap: 16,
            justifyContent: 'center',
            marginVertical: 24,
          }}
        >
          <Text fontWeight="bold" fontSize={FontSize.LARGE}>
            Trung tâm Huấn luyện và Giáo dục nghề nghiệp số 1
          </Text>
          <Text
            style={{ fontWeight: 900 }}
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
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  txtTitle: {},
  logo: {
    width: 36,
    height: 36,
  },
  imgLogo: {
    width: 65,
    height: 73,
  },
  imgBanner: {
    position: 'absolute',
    left: 10,
  },
});
