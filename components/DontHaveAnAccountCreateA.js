import React, { useMemo, memo } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DontHaveAnAccountCreateA = memo(
  ({
    dontHaveAnAccountCreateAPosition,
    dontHaveAnAccountCreateAWidth,
    dontHaveAnAccountCreateAHeight,
    dontHaveAnAccountCreateATop,
    dontHaveAnAccountCreateARight,
    dontHaveAnAccountCreateABottom,
    dontHaveAnAccountCreateALeft,
    onDontHaveAnContainerPress,
  }) => {
    const dontHaveAnAccountCreateAStyle = useMemo(() => {
      return {
        ...getStyleValue("position", dontHaveAnAccountCreateAPosition),
        ...getStyleValue("width", dontHaveAnAccountCreateAWidth),
        ...getStyleValue("height", dontHaveAnAccountCreateAHeight),
        ...getStyleValue("top", dontHaveAnAccountCreateATop),
        ...getStyleValue("right", dontHaveAnAccountCreateARight),
        ...getStyleValue("bottom", dontHaveAnAccountCreateABottom),
        ...getStyleValue("left", dontHaveAnAccountCreateALeft),
      };
    }, [
      dontHaveAnAccountCreateAPosition,
      dontHaveAnAccountCreateAWidth,
      dontHaveAnAccountCreateAHeight,
      dontHaveAnAccountCreateATop,
      dontHaveAnAccountCreateARight,
      dontHaveAnAccountCreateABottom,
      dontHaveAnAccountCreateALeft,
    ]);

    return (
      <View
        style={[styles.dontHaveAnAccountcreateA, dontHaveAnAccountCreateAStyle]}
      >
        <Pressable
          style={styles.dontHaveAnContainer}
          onPress={onDontHaveAnContainerPress}
        >
          <Text style={styles.text}>
            <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
            <Text style={styles.createAnAccount}>Create an account</Text>
          </Text>
        </Pressable>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  dontHaveAn: {
    color: Color.colorGray_500,
  },
  createAnAccount: {
    color: Color.colorCornflowerblue_100,
  },
  text: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
  },
  dontHaveAnContainer: {
    position: "absolute",
    left: "0%",
    top: "0%",
  },
  dontHaveAnAccountcreateA: {
    width: 242,
    height: 15,
  },
});

export default DontHaveAnAccountCreateA;
