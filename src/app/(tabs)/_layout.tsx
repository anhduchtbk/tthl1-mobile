import { colors } from '@/theme/colors';
import { Tabs } from 'expo-router';
import React from 'react';

import BookSvgTab from '@/assets/icons/book-tab-svg';
import HomeSvg from '@/assets/icons/home-svg';
import MilitaryNumberSvg from '@/assets/icons/military-number';
import SettingSvgComponent from '@/assets/icons/setting-svg';
import TimetableTabSvg from '@/assets/icons/timetable-tab-svg';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary[20],
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
          tabBarIcon: ({ color }) => <HomeSvg color={color} />,
        }}
      />
      <Tabs.Screen
        name="manage-student"
        options={{
          title: 'QL học viên',
          tabBarIcon: ({ color }) => <BookSvgTab color={color} />,
        }}
      />
      <Tabs.Screen
        name="military-number"
        options={{
          title: 'Quân số',
          tabBarIcon: ({ color }) => <MilitaryNumberSvg color={color} />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'T.K.Biểu',
          tabBarIcon: ({ color }) => <TimetableTabSvg color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Cài đặt',
          tabBarIcon: ({ color }) => <SettingSvgComponent color={color} />,
        }}
      />
    </Tabs>
  );
}
