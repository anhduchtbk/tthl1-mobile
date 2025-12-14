import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import AuthGate from "@/components/AuthGate";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { store } from "@/store/redux/store";
import { Provider } from "react-redux";

// export const unstable_settings = {
//   anchor: "(tabs)",
// };

export default function RootLayout() {
  const router = useRouter();

  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" options={{ headerShown: false }} />

          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
        </Stack>
        <AuthGate />
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
