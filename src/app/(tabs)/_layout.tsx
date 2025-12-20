import { Tabs } from 'expo-router';
import React from 'react';

import HomeSvg from '@/assets/icons/home-svg';
import ManageStudentSvg from '@/assets/icons/manage-student-svg';
import PersonnelSvg from '@/assets/icons/personnel-svg';
import SettingSvg from '@/assets/icons/setting-svg';
import TimetableIconSvg from '@/assets/icons/time-table';
import { colors } from '@/theme/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary[20],
        // tabBarStyle: Platform.select({
        //   ios: { position: 'absolute' },
        //   default: {},
        // }),
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color }) => <HomeSvg activeColor={color} />,
        }}
      />
      <Tabs.Screen
        name="manage-student"
        options={{
          title: 'QL học viên',
          tabBarIcon: ({ color }) => <ManageStudentSvg activeColor={color} />,
        }}
      />
      <Tabs.Screen
        name="military-number"
        options={{
          title: 'Quân số',
          tabBarIcon: ({ color }) => <PersonnelSvg activeColor={color} />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'T.K.Biểu',
          tabBarIcon: ({ color }) => <TimetableIconSvg activeColor={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Cài đặt',
          tabBarIcon: ({ color }) => <SettingSvg activeColor={color} />,
        }}
      />
    </Tabs>
  );
}
