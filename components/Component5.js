import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Component5 = memo(() => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.component5}
      onPress={() => navigation.navigate("IPhone1415ProMax5")}
    >
      <Text style={styles.viaSms}>Via SMS</Text>
      <View style={styles.frame}>
        <Image
          style={styles.mingcutemessage4FillIcon}
          contentFit="cover"
          source={require("../assets/mingcutemessage4fill.png")}
        />
        <Text style={styles.text}>+27 697475448</Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  viaSms: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorCornflowerblue_100,
    textAlign: "left",
    height: 12,
    marginLeft: 34,
  },
  mingcutemessage4FillIcon: {
    position: "relative",
    width: 23,
    height: 23,
    overflow: "hidden",
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorCornflowerblue_100,
    textAlign: "left",
  },
  frame: {
    width: 198,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 13,
  },
  component5: {
    alignSelf: "stretch",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue_100,
    borderWidth: 1,
    height: 89,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_4xs,
    marginTop: 10,
  },
});

export default Component5;
