import { Redirect, Tabs } from "expo-router";
import React, { useEffect } from "react";

import HomeSvg from "@/assets/icons/home-svg";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { RootState } from "@/store/redux/store";
import { useSelector } from "react-redux";

export default function TabLayout() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  useEffect(() => {
    console.log(isLoggedIn);
    <Redirect href={"/login"} />;

    if (!isLoggedIn) {
    }
  }, [isLoggedIn]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#846FE2",
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color }) => <HomeSvg />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
