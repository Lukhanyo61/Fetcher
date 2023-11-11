import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component9 = memo(
  ({
    buttonText,
    propAlignSelf,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    onComponent9Press,
  }) => {
    const component9Style = useMemo(() => {
      return {
        ...getStyleValue("alignSelf", propAlignSelf),
        ...getStyleValue("position", propPosition),
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
        ...getStyleValue("width", propWidth),
      };
    }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

    return (
      <Pressable
        style={[styles.component9, component9Style]}
        onPress={onComponent9Press}
      >
        <Text style={styles.verify}>{buttonText}</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  verify: {
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    alignSelf: "stretch",
  },
  component9: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorCornflowerblue_100,
    paddingHorizontal: Padding.p_121xl,
    paddingVertical: Padding.p_2xl,
    alignSelf: "stretch",
  },
});

export default Component9;
