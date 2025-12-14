import { PropsWithChildren } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = PropsWithChildren<{
  label: string;
  invisiable?: boolean;
  style?: any;
  defaultValue?: string;
}>;

export function FormInputLabel({ label }: Props) {
  return (
    <View style={{}}>
      <Text style={styles.labelFont}>{label}</Text>
      <TextInput style={styles.inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  labelFont: {
    fontWeight: 400,
    color: "#627A96",
    fontSize: 14,
    lineHeight: 21,
  },
  inputStyle: {
    height: 50,
    borderRadius: 10,
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
});
