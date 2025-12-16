import { images } from '@/assets/images';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect, useMemo } from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';

const IntroducteScreen = () => {
  const router = useRouter();
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  const { logoFullWidth, logoFullHeight } = useMemo(() => {
    return {
      logoFullWidth: screenWidth,
      logoFullHeight: screenHeight,
    };
  }, [screenWidth]);

  useEffect(() => {
    const handler = setTimeout(() => router.replace('/auth'), 500);
    return () => clearTimeout(handler);
  }, [router]);

  return (
    <LinearGradient colors={['#FFFFFF', '#E4DFBDB2']} style={styles.container}>
      <Image
        source={images.logo}
        style={{ width: logoFullWidth, height: logoFullHeight }}
        resizeMode="cover"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default IntroducteScreen;
