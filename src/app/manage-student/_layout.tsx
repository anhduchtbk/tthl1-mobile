import { Stack } from "expo-router";
import React from 'react';

export default function ManageStudentLayout() {
  return (
    <Stack>
      <Stack.Screen name="student-detail"  options={{ headerShown: false }} />
    </Stack>
  );
}
