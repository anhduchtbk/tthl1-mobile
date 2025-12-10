import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export function ButtonLogin() {
  const router = useRouter();

  return (
    <View style={styles.login}>
      <Button title={"Đăng nhập"} color={"#5C0191"} onPress={() => router.replace('/(tabs)')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    padding: 12,
  },
});
