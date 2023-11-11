import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Component4 = memo(() => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.component4}
      onPress={() => navigation.navigate("IPhone1415ProMax4")}
    >
      <Text style={styles.viaEmail}>Via Email</Text>
      <View style={styles.frame}>
        <Image
          style={styles.icroundEmailIcon}
          contentFit="cover"
          source={require("../assets/icroundemail.png")}
        />
        <Text style={styles.johndoemailcom}>johndoe@mail.com</Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  viaEmail: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    height: 12,
    marginLeft: 34,
  },
  icroundEmailIcon: {
    position: "relative",
    width: 23,
    height: 23,
    overflow: "hidden",
  },
  johndoemailcom: {
    position: "relative",
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  frame: {
    width: 230,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 12,
  },
  component4: {
    alignSelf: "stretch",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorRoyalblue_100,
    height: 89,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_4xs,
    marginTop: 12,
  },
});

export default Component4;
