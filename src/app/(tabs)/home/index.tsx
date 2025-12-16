import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '@/components/common/Layout/Box';
import { FunctionList } from '@/features/home/function-list';
import { HonorOfWeek } from '@/features/home/honnor';
import { InforAccount } from '@/features/home/infor-account';
import { Timetable } from '@/features/home/timetable';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  return (
    <LinearGradient
      colors={['rgba(50, 99, 248, 1)', 'rgba(50, 99, 248, 0)']}
      style={styles.background}
    >
      <Image
        source={require('@/assets/images/background-home-image.png')}
        style={styles.logoAbsolute}
        width={screenWidth}
        height={screenHeight / 2}
      />
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView
          style={styles.titleContainer}
          showsVerticalScrollIndicator={false}
        >
          <InforAccount />
          <FunctionList />
          <Timetable />
          <HonorOfWeek />
          <Image
            source={require('@/assets/images/footer-home-image.png')}
            resizeMode="contain"
            style={{
              width: screenWidth,
              height: (screenWidth / 375) * 280,
              marginTop: 16,
              alignSelf: 'center',
            }}
          />
          <Box h={50} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  logo: {
    width: 61,
    height: 68,
  },
  logoAbsolute: {
    position: 'absolute',
    top: 0,
  },
});
