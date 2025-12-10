import { Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#D4CAFC", "#FCD1DA"]} style={styles.background}>
      <SafeAreaView style={styles.titleContainer}>
        <ScrollView>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    gap: 36,
  },
  background: {
    flex: 1,
  },
  logo: {
    width: 61,
    height: 68,
  },
  header1: {
    fontWeight: 700,
    fontSize: 24,
    color: "#5C0191",
    lineHeight: 34,
  },
  header2: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 34,
  },
  forgotPass: {
    alignItems: "center",
    fontWeight: 400,
    fontSize: 16,
  },
  formLogin: {
    gap: 12,
  },
});
