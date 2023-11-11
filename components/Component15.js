import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component15 = memo(({ component15Position }) => {
  const component15Style = useMemo(() => {
    return {
      ...getStyleValue("position", component15Position),
    };
  }, [component15Position]);

  return (
    <View>
      <View style={styles.component15Child} />
      <Image
        style={styles.icoutlineEmailIcon}
        contentFit="cover"
        source={require("../assets/icoutlineemail.png")}
      />
      <Text style={styles.enterYourEmail}>Enter your email address</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  component15Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    position: "absolute",
  },
  icoutlineEmailIcon: {
    height: "43.64%",
    width: "6.78%",
    top: "25.45%",
    right: "89.45%",
    bottom: "30.91%",
    left: "3.77%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  enterYourEmail: {
    top: "36.36%",
    left: "13.82%",
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_500,
    textAlign: "left",
    position: "absolute",
  },
});

export default Component15;
