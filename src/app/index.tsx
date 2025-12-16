import { Box } from '@/components/common/Layout/Box';
import { Text } from '@/components/common/Text/Text';
// import { useAuthStore } from '@/store/authStore';
import { router, useRootNavigationState } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

export default function Index() {
  const navigationState = useRootNavigationState();
  // const { token } = useAuthStore();

  useEffect(() => {
    if (!navigationState?.key) return;

    const checkSignIn = async () => {
      try {
        router.replace('/auth/introduce');
        // router.replace(token ? '/(tabs)' : '/auth/introduce');
      } catch (e) {
        console.error(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    checkSignIn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigationState?.key]);

  return (
    <Box alignItems="center" justifyContent="center" flex={1}>
      <Text>Loading...</Text>
    </Box>
  );
}
