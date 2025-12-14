import { colors } from '@/theme/colors';
import { Tabs } from 'expo-router';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary[10],
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="manage-student"
        options={{
          title: 'QL học viên',
          // tabBarIcon: ({ color }) => (
          //   <IconSymbol size={28} name="paperplane.fill" color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="military-number"
        options={{
          title: 'Quân số',
          // tabBarIcon: ({ color }) => (
          //   <IconSymbol size={28} name="paperplane.fill" color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'T.K.Biểu',
          // tabBarIcon: ({ color }) => (
          //   <IconSymbol size={28} name="paperplane.fill" color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Cài đặt',
          // tabBarIcon: ({ color }) => (
          //   <IconSymbol size={28} name="paperplane.fill" color={color} />
          // ),
        }}
      />
    </Tabs>
  );
}
