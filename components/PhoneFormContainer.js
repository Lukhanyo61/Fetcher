import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Component5 from "./Component5";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PhoneFormContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={styles.frameFlexBox}>
        <View style={styles.frame2}>
          <Pressable
            style={styles.epback}
            onPress={() => navigation.navigate("IPhone1415ProMax2")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/epback.png")}
            />
          </Pressable>
          <Text style={[styles.forgotPassword, styles.dontWorryWeveTypo]}>
            Forgot Password
          </Text>
        </View>
      </View>
      <View style={styles.frame3}>
        <View style={styles.frameFlexBox}>
          <View style={styles.frame5}>
            <Text
              style={[styles.dontWorryWeve, styles.dontWorryWeveTypo]}
            >{`Don’t worry! we’ve got you covered. Please enter select 
password recovery methods`}</Text>
            <View style={[styles.frame6, styles.frameFlexBox]}>
              <Image
                style={[styles.forgotPasswordBro1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/forgot-passwordbro-1.png")}
              />
            </View>
          </View>
        </View>
        <Component5 />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  dontWorryWeveTypo: {
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  icon: {
    height: "100%",
  },
  epback: {
    width: 40,
    height: 40,
  },
  forgotPassword: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
  },
  frame2: {
    width: 139,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  dontWorryWeve: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorGray_100,
    width: 274,
    height: 41,
  },
  forgotPasswordBro1: {
    maxWidth: "100%",
    height: 343,
    alignSelf: "stretch",
  },
  frame6: {
    marginTop: -2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame5: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frame3: {
    justifyContent: "flex-end",
    marginTop: 22,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frame: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default PhoneFormContainer;
