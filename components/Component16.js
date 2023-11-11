import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component16 = memo(({ component16Position }) => {
  const component16Style = useMemo(() => {
    return {
      ...getStyleValue("position", component16Position),
    };
  }, [component16Position]);

  return (
    <View>
      <View style={styles.component16Child} />
      <Image
        style={[styles.eplockIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/eplock.png")}
      />
      <Text style={styles.enterYourPassword}>Enter your password</Text>
      <Image
        style={[styles.fluenteye12RegularIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/fluenteye12regular1.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "23.64%",
    position: "absolute",
  },
  component16Child: {
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
  eplockIcon: {
    height: "53.09%",
    width: "6.98%",
    right: "89.5%",
    bottom: "23.27%",
    left: "3.52%",
  },
  enterYourPassword: {
    top: "45.45%",
    left: "13.57%",
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_500,
    textAlign: "left",
    position: "absolute",
  },
  fluenteye12RegularIcon: {
    height: "49.09%",
    width: "6.78%",
    right: "2.51%",
    bottom: "27.27%",
    left: "90.7%",
  },
});

export default Component16;
