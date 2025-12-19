import { Stack } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="manage-facility" />
      <Stack.Screen name="facility-detail" />
    </Stack>
  );
}
