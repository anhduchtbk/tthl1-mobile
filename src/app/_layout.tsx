import { AsyncFont } from '@/components/common/AsyncFont/AsyncFont';
import { queryClient } from '@/lib/react-query';
import { lightTheme } from '@/theme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Suspense, useEffect } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

function SplashFallback() {
  useEffect(
    () => () => {
      SplashScreen.hideAsync();
    },
    []
  );
  return null;
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Suspense fallback={<SplashFallback />}>
      <AsyncFont
        src={require('../assets/fonts/Mulish-Regular.ttf')}
        fontFamily="Mulish-Regular"
      />
      <AsyncFont
        src={require('../assets/fonts/Mulish-Medium.ttf')}
        fontFamily="Mulish-Medium"
      />
      <AsyncFont
        src={require('../assets/fonts/Mulish-SemiBold.ttf')}
        fontFamily="Mulish-SemiBold"
      />
      <AsyncFont
        src={require('../assets/fonts/Mulish-Bold.ttf')}
        fontFamily="Mulish-Bold"
      />
      <AsyncFont
        src={require('../assets/fonts/Mulish-ExtraBold.ttf')}
        fontFamily="Mulish-ExtraBold"
      />
      <AsyncFont
        src={require('../assets/fonts/Mulish-Black.ttf')}
        fontFamily="Mulish-Black"
      />
      <GestureHandlerRootView style={styles.container}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            value={lightTheme}
            // value={colorScheme === 'dark' ? darkTheme : lightTheme}
          >
            <BottomSheetModalProvider>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="auth" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

                <Stack.Screen
                  name="modal"
                  options={{ presentation: 'modal' }}
                />
              </Stack>
            </BottomSheetModalProvider>
            <StatusBar style="auto" />
          </ThemeProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
