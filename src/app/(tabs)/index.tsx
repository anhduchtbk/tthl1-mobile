import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaView style={styles.titleContainer}>
        <ScrollView contentContainerStyle={styles.titleContainer}>
          <InforAccount />
          <FunctionList />
          <Timetable />
          <HonorOfWeek />
          <View style={{ alignItems: 'center', gap: 34 }}>
            <Text style={styles.txtFooter}>
              Một phút cũng luyện {'\n'} Một giây cũng rèn
            </Text>

            <Image
              source={require('@/assets/images/police-man.png')}
              resizeMode="contain"
              style={{ width: 139, height: 139 }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingRight: 10,
    paddingLeft: 10,
    gap: 30,
  },
  background: {
    flex: 1,
  },
  logo: {
    width: 61,
    height: 68,
  },
  header1: {
    fontWeight: 700,
    fontSize: 24,
    color: '#5C0191',
    lineHeight: 34,
  },
  header2: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 34,
  },
  forgotPass: {
    alignItems: 'center',
    fontWeight: 400,
    fontSize: 16,
  },
  formLogin: {
    gap: 12,
  },
  txtFooter: {
    fontFamily: 'Mulish',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
  },
  logoAbsolute: {
    position: 'absolute',
    top: 0,
  },
});
