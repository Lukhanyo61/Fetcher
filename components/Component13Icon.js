import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const Component13Icon = memo(() => {
  return (
    <Image
      style={styles.component13Icon}
      contentFit="cover"
      source={require("../assets/component-13.png")}
    />
  );
});

const styles = StyleSheet.create({
  component13Icon: {
    position: "absolute",
    top: 845,
    left: 185,
    width: 60,
    height: 60,
  },
});

export default Component13Icon;
