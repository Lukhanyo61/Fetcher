import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Component1 from "./Component1";
import { Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component2 = memo(
  ({
    devicongoogle,
    component2Position,
    component2Top,
    component2Left,
    component2Width,
    component2Height,
    component2Right,
    component2Bottom,
    component2BackgroundColor,
    component2BorderColor,
    component2BorderWidth,
  }) => {
    const component2Style = useMemo(() => {
      return {
        ...getStyleValue("position", component2Position),
        ...getStyleValue("top", component2Top),
        ...getStyleValue("left", component2Left),
        ...getStyleValue("width", component2Width),
        ...getStyleValue("height", component2Height),
        ...getStyleValue("right", component2Right),
        ...getStyleValue("bottom", component2Bottom),
        ...getStyleValue("backgroundColor", component2BackgroundColor),
        ...getStyleValue("borderColor", component2BorderColor),
        ...getStyleValue("borderWidth", component2BorderWidth),
      };
    }, [
      component2Position,
      component2Top,
      component2Left,
      component2Width,
      component2Height,
      component2Right,
      component2Bottom,
      component2BackgroundColor,
      component2BorderColor,
      component2BorderWidth,
    ]);

    return (
      <View style={[styles.component2, component2Style]}>
        <Component1 devicongoogle={require("../assets/devicongoogle1.png")} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  component2: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorRoyalblue_200,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 397,
    height: 55,
    justifyContent: "center",
    paddingHorizontal: Padding.p_80xl,
    paddingVertical: 0,
  },
});

export default Component2;
