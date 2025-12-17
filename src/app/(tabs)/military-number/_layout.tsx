import { Stack } from 'expo-router';
import React from 'react';

export default function MilitaryNumberLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="military-history-report" />

      <Stack.Screen name="index" />
      {/* <Stack.Screen name="personel-detail" /> */}
    </Stack>
  );
}
