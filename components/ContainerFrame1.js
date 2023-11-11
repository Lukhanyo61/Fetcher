import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Component6 from "./Component6";
import Component8 from "./Component8";

const ContainerFrame1 = memo(() => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameFlexBox}>
        <Component6 />
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Component8 />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frame2: {
    marginTop: 3,
  },
  frame: {
    alignItems: "center",
    marginTop: 56,
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default ContainerFrame1;
