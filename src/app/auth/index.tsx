import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonLogin } from "@/components/button/login";
import { FormInputLabel } from "@/components/input/form-input-label";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  return (
    <LinearGradient colors={["#D4CAFC", "#FCD1DA"]} style={styles.background}>
      <SafeAreaView style={styles.titleContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View>
          <Text style={styles.header1}>Chào mừng, </Text>
          <Text style={styles.header2}>
            Đăng nhập để bắt đầu với TTHL1 - K02
          </Text>
        </View>

        <View style={styles.formLogin}>
          <FormInputLabel label="Tên đăng nhập" />
          <FormInputLabel label="Mật khẩu" />
          <TouchableOpacity activeOpacity={0.7} style={styles.forgotPass}>
            <Text style={{ color: "#5C0191" }}>Quên mật khẩu ?</Text>
          </TouchableOpacity>
          <ButtonLogin />
        </View>
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
