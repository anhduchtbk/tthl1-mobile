import { RootState } from "@/store/redux/store";
import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function AuthGate() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return <Redirect href="/(tabs)" />;
}
