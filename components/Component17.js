import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component17 = memo(
  ({
    component17Position,
    component17Width,
    component17Height,
    component17Top,
    component17Right,
    component17Bottom,
    component17Left,
    onForgotPasswordPress,
  }) => {
    const component17Style = useMemo(() => {
      return {
        ...getStyleValue("position", component17Position),
        ...getStyleValue("width", component17Width),
        ...getStyleValue("height", component17Height),
        ...getStyleValue("top", component17Top),
        ...getStyleValue("right", component17Right),
        ...getStyleValue("bottom", component17Bottom),
        ...getStyleValue("left", component17Left),
      };
    }, [
      component17Position,
      component17Width,
      component17Height,
      component17Top,
      component17Right,
      component17Bottom,
      component17Left,
    ]);

    return (
      <View style={[styles.component17, component17Style]}>
        <View style={styles.component17Child} />
        <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
          Remember me
        </Text>
        <Pressable
          style={[styles.forgotPassword, styles.rememberMePosition]}
          onPress={onForgotPasswordPress}
        >
          <Text style={[styles.forgotPassword1, styles.rememberMeTypo]}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  rememberMeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
  },
  rememberMePosition: {
    top: "7.69%",
    position: "absolute",
  },
  component17Child: {
    height: "100%",
    width: "3.37%",
    top: "0%",
    right: "96.63%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    position: "absolute",
  },
  rememberMe: {
    left: "4.4%",
    color: Color.colorGray_500,
    top: "7.69%",
    position: "absolute",
  },
  forgotPassword1: {
    color: Color.colorCornflowerblue_100,
  },
  forgotPassword: {
    left: "77.46%",
  },
  component17: {
    width: 386,
    height: 13,
  },
});

export default Component17;
