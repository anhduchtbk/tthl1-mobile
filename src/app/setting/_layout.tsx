import { Stack } from "expo-router";
import React from 'react';

export default function SettingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="change-password" />
    </Stack>
  );
}
