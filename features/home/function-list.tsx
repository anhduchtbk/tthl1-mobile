import { Image, StyleSheet, Text, View } from "react-native";

export function FunctionList() {
  return (
    <View>
      <Text style={styles.txtTitle}>Chức năng</Text>
      <View style={styles.containerFList}>
        <View style={styles.btAva}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.imgAva}
          />
          <Text style={styles.txtFunction}>Quản lý học viên</Text>
        </View>
        <View style={styles.btAva}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.imgAva}
          />
          <Text style={styles.txtFunction}>Điểm danh quân số</Text>
        </View>
      </View>
      <View style={styles.containerFList}>
        <View style={styles.btAva}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.imgAva}
          />
          <Text style={styles.txtFunction}>Quản lý vật chất</Text>
        </View>
        <View style={styles.btAva}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.imgAva}
          />
          <Text style={styles.txtFunction}>Thời khoá biểu</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFList: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 8,
  },
  btAva: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  imgAva: {
    width: 32,
    height: 32,
    borderRadius: 12,
    marginRight: 8,
  },
  txtTitle: {
    fontWeight: 700,
    fontSize: 20,
  },
  txtFunction: {
    flex: 1,
    fontSize: 14,
    fontWeight: 500,
  },
});
