import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Component1 = memo(({ devicongoogle }) => {
  return (
    <View style={styles.component1}>
      <Image
        style={styles.devicongoogle}
        contentFit="cover"
        source={devicongoogle}
      />
      <Text style={styles.continueWithGoogle}>Continue with google</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  devicongoogle: {
    height: "100%",
    width: "14.29%",
    top: "0%",
    right: "85.71%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  continueWithGoogle: {
    height: "84%",
    width: "80%",
    top: "16%",
    left: "20%",
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  component1: {
    width: 175,
    height: 25,
  },
});

export default Component1;
