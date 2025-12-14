import NotificationSvg from "@/assets/icons/notification-svg";
import { Image, StyleSheet, Text, View } from "react-native";

export function InforAccount() {
  return (
    <View>
      <View style={styles.containerUser}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.containerCode}>
          <Text style={styles.txtAccount} numberOfLines={1}>
            Nguyễn Anh Tuấn
          </Text>
          <Text style={styles.txtCode} numberOfLines={1}>
            A4 - B2 - C3
          </Text>
        </View>
        <NotificationSvg />
      </View>
      <View style={styles.titleContainer}>
        <View
          style={{
            flex: 1,
            gap: 16,
            justifyContent: "center",
            marginVertical: 24,
          }}
        >
          <Text style={styles.txtAccount}>
            Trung tâm huấn luyện và giáo dục nghề nghiệp số 1
          </Text>
          <Text style={[styles.txtAccount, { fontSize: 16 }]}>Tiểu đoàn 2</Text>
        </View>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.imgLogo}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerUser: {
    flexDirection: "row",
    gap: 8,
    marginLeft: 16,
    marginVertical: 6,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 4,
  },
  txtTitle: {},
  logo: {
    width: 36,
    height: 36,
  },
  imgLogo: {
    width: 105,
    height: 118,
  },
  txtAccount: {
    fontFamily: "Mulish",
    color: "#490074",
    fontWeight: 800,
    fontSize: 13,
  },
  txtCode: {
    fontFamily: "Mulish",
    fontSize: 13,
    color: "#8D5581",
  },
  containerCode: {
    flex: 1,
  },
});
