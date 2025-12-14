import EyeSvg from "@/assets/icons/eye-svg";
import { PropsWithChildren, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = PropsWithChildren<{
  label: string;
  invisiable?: boolean;
  style?: any;
  defaultValue?: string;
  isPassword?: boolean;
}>;

export function FormInputLabel({ label, isPassword }: Props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={{}}>
      <Text style={styles.labelFont}>{label}</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} secureTextEntry={secureTextEntry} />
        {isPassword ? (
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            activeOpacity={0.7}
          >
            <EyeSvg />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelFont: {
    fontFamily: "Mulish",
    fontWeight: 400,
    color: "#627A96",
    fontSize: 14,
    lineHeight: 21,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
  },
});
