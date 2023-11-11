import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const Component12Icon = memo(() => {
  return (
    <Image
      style={styles.component12Icon}
      contentFit="cover"
      source={require("../assets/component-12.png")}
    />
  );
});

const styles = StyleSheet.create({
  component12Icon: {
    position: "absolute",
    top: 852,
    left: 102,
    width: 62,
    height: 62,
  },
});

export default Component12Icon;
