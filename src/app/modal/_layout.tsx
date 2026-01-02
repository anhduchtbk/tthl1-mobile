import { Stack } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="student-search" options={{ presentation: 'modal' }} />
      <Stack.Screen
        name="schedule-search"
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="military-number"
        options={{ presentation: 'modal' }}
      />
    </Stack>
  );
}
