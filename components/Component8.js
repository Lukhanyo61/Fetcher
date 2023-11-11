import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Component8 = memo(() => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.component8}
      onPress={() => navigation.navigate("IPhone1415ProMax12")}
    >
      <Text style={styles.verify}>Verify</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  verify: {
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    alignSelf: "stretch",
  },
  component8: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorCornflowerblue_100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_123xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
});

export default Component8;
