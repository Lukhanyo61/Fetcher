import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component3 = memo(
  ({
    component3Position,
    component3Top,
    component3Left,
    component3Width,
    component3Height,
    component3Right,
    component3Bottom,
  }) => {
    const component3Style = useMemo(() => {
      return {
        ...getStyleValue("position", component3Position),
        ...getStyleValue("top", component3Top),
        ...getStyleValue("left", component3Left),
        ...getStyleValue("width", component3Width),
        ...getStyleValue("height", component3Height),
        ...getStyleValue("right", component3Right),
        ...getStyleValue("bottom", component3Bottom),
      };
    }, [
      component3Position,
      component3Top,
      component3Left,
      component3Width,
      component3Height,
      component3Right,
      component3Bottom,
    ]);

    return (
      <View style={[styles.component3, component3Style]}>
        <Text style={[styles.welcomeBack, styles.signInToTypo]}>
          <Text style={styles.welcome}>{`Welcome
`}</Text>
          <Text style={styles.back}>back!</Text>
        </Text>
        <Text
          style={[styles.signInTo, styles.signInToTypo]}
        >{`Sign in to access your package history and get real-time
updates on all your resources`}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  signInToTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  welcome: {
    color: Color.colorRoyalblue_100,
  },
  back: {
    color: Color.colorCornflowerblue_100,
  },
  welcomeBack: {
    fontSize: FontSize.size_18xl,
  },
  signInTo: {
    fontSize: FontSize.size_3xs,
    color: Color.colorGray_100,
    height: 41,
    marginTop: 2,
    width: 645,
  },
  component3: {
    height: 133,
    paddingLeft: Padding.p_12xs,
    width: 645,
  },
});

export default Component3;
