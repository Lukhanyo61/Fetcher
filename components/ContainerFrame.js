import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Component7 from "./Component7";
import Component9 from "./Component9";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ContainerFrame = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Component7 />
          <Text style={styles.viaEmail}>Via Email</Text>
        </View>
      </View>
      <View style={styles.frame3}>
        <Component9
          buttonText="Verify"
          onComponent9Press={() => navigation.navigate("IPhone1415ProMax12")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  viaEmail: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 52,
    height: 15,
    marginLeft: 12,
    marginTop: -25,
  },
  frame2: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 5,
  },
  frame: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 56,
  },
});

export default ContainerFrame;
