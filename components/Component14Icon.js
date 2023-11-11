import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const Component14Icon = memo(() => {
  return (
    <Image
      style={styles.component14Icon}
      contentFit="cover"
      source={require("../assets/component-14.png")}
    />
  );
});

const styles = StyleSheet.create({
  component14Icon: {
    position: "absolute",
    top: 844,
    left: 349,
    width: 60,
    height: 60,
  },
});

export default Component14Icon;
