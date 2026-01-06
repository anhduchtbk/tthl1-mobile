import { Stack } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, presentation: 'modal' }}>
      <Stack.Screen name="student-search" />
      <Stack.Screen name="schedule-search" />
      <Stack.Screen name="military-number" />
    </Stack>
  );
}
