import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import Component2 from "./Component2";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component18 = memo(
  ({
    devicongoogle,
    component18Position,
    component18Width,
    component18Height,
    component18Top,
    component18Right,
    component18Bottom,
    component18Left,
    rectangleViewBackgroundColor,
    component2BackgroundColor,
    component2BorderColor,
    component2BorderWidth,
  }) => {
    const component18Style = useMemo(() => {
      return {
        ...getStyleValue("position", component18Position),
        ...getStyleValue("width", component18Width),
        ...getStyleValue("height", component18Height),
        ...getStyleValue("top", component18Top),
        ...getStyleValue("right", component18Right),
        ...getStyleValue("bottom", component18Bottom),
        ...getStyleValue("left", component18Left),
      };
    }, [
      component18Position,
      component18Width,
      component18Height,
      component18Top,
      component18Right,
      component18Bottom,
      component18Left,
    ]);

    const rectangleViewStyle = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
      };
    }, [rectangleViewBackgroundColor]);

    const component2Style = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", component2BackgroundColor),
        ...getStyleValue("borderColor", component2BorderColor),
        ...getStyleValue("borderWidth", component2BorderWidth),
      };
    }, [
      component2BackgroundColor,
      component2BorderColor,
      component2BorderWidth,
    ]);

    return (
      <View style={[styles.component18, component18Style]}>
        <View style={[styles.component18Child, rectangleViewStyle]} />
        <Component2
          devicongoogle={require("../assets/devicongoogle.png")}
          component2Position="absolute"
          component2Top="69.1%"
          component2Left="0.25%"
          component2Width="99.5%"
          component2Height="30.9%"
          component2Right="0.25%"
          component2Bottom="0%"
          component2BackgroundColor="rgba(1, 101, 225, 0)"
          component2BorderColor="rgba(128, 128, 128, 0.39)"
          component2BorderWidth={1}
        />
        <Text style={[styles.login, styles.orTypo]}>Login</Text>
        <View style={styles.component18Item} />
        <Image
          style={styles.component18Inner}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.or, styles.orTypo]}>OR</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  orTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  component18Child: {
    height: "30.9%",
    width: "99.5%",
    top: "0%",
    right: "0.25%",
    bottom: "69.1%",
    left: "0.25%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorRoyalblue_100,
    position: "absolute",
  },
  login: {
    height: "11.8%",
    width: "10.03%",
    top: "9.55%",
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    left: "44.61%",
  },
  component18Item: {
    height: "0.56%",
    width: "100.25%",
    top: "51.97%",
    right: "-0.13%",
    bottom: "47.47%",
    left: "-0.13%",
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderTopWidth: 1,
    position: "absolute",
  },
  component18Inner: {
    height: "24.16%",
    width: "10.78%",
    top: "38.2%",
    right: "44.61%",
    bottom: "37.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    left: "44.61%",
    position: "absolute",
  },
  or: {
    top: "46.63%",
    left: "48.12%",
    fontSize: FontSize.size_4xs,
    color: Color.colorGray_700,
  },
  component18: {
    width: 399,
    height: 178,
  },
});

export default Component18;
