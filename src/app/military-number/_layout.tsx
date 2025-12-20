import { Stack } from 'expo-router';
import React from 'react';

export default function MilitaryNumberLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="military-history-report"
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen name="index" /> */}
      {/* <Stack.Screen name="personel-detail" /> */}
    </Stack>
  );
}
